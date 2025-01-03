---
title: NixOS, an Operating System for Me?
date: 28/08/2024
datetime: 1724796000000
description: Detailing my experience with NixOS, its benefits and drawbacks, and how to work around them for a great experience.
---

# NixOS & Nix

[NixOS - The Right Amount of Abstraction?]{.subtitle}

## Intro

For the past year, I've been using NixOS for my systems, starting with a VM and eventually including my workstation, work laptop, NAS, and more. All these systems are managed from the same configuration file, accessible on [GitHub](https://github.com/perstarkse/nixos-config). During this time, I've experienced some frustrations, learned a lot, submitted packages to nixpkgs, and taken over maintenance of some.

What prompted this exploration was the fragility of several systems I'd used before. Even with backups of dotfiles, relevant etc files, and installed packages, restoring a broken system was a tedious process.

When I discovered NixOS with its declarative configurations, it clicked. This post details my current conceptual view on what NixOS is for me, what I enjoy about it, and some frustrations I've encountered. If you're new to Nix or NixOS, I recommend reading the short summary at the bottom of the page.

## What is NixOS for Me?

In its completeness, the best way I can describe NixOS (or a subset of its components) is as a wrapper around a Linux system. It abstracts away several aspects of managing a system and services. Setting up a user, OpenSSH, and adding a public SSH key as an authorized key is as simple as adding:

```nix
users.users = {
  p = {
    isNormalUser = true;
    openssh.authorizedKeys.keys = [
      "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAII6uq8nXD+QBMhXqRNywwCa/dl2VVvG/2nvkw9HEPFzn p@charon"
    ];
  };
};

services.openssh = {
  enable = true;
  settings.PermitRootLogin = "no";
  settings.PasswordAuthentication = false;
};
```

These configurations aren't hard to set up, and a seasoned Linux user might do them in their sleep. However, having them declared in a configuration file and instantly applied makes things a breeze.

### Other Notable Aspects

- It ensures reproducibility of my systems. Backups are essential for data, but having the system itself be reproducible makes restoring much easier.
- It documents changes I've made to a system, and with version control, they're timestamped and reversible.
- It offers great developer tooling, for example for setting up project enviroments. In my opinion it offers a substantially better version control than for example nvm for nodejs versions. It's easy to have environment variables set up and automatically applied with direnv.

## On Having the Right Amount of Abstraction

Abstractions can be great, but they also carry significant drawbacks. Looking at the example above, it's easy to draw two conclusions: **A**, more can be done with less code and mental effort. I don't have to remember all the commands, file system locations, and action sequences. **B**, one loses a certain connection to the underlying system. One can, and often should, read the modules/nixpkgs to understand what they do. By doing so, one can learn the underlying system without a doubt.

I've heard concerns in the r/nixos community that using NixOS impedes the learning journey. I agree to a large degree. I think learning this more abstracted way is a shallower learning experience. However, it also enables a wider scope. Most of us have limited time, and tools that enable us to do more are generally good. One can wonder, to what purpose does the learning serve? Being a great sysadmin? If so, perhaps it's useful to run something else.

As always, key aspects to abstraction are finding the correct level. Too abstracted, and it becomes a hindrance; too little, and it offers small benefits. As of writing, I'm quite pleased with the amount.

## Current pain points

- Python projects. Have for me meant a significant issue. There are most likely great solutions, but for me the solutions I've opted for have always felt a bit hacky and suboptimal.
- Documentation is a bit lacking. My current best workaround is looking through the options and searching github for Nix language files containing what I am looking for. Most time there is someone who has already solved the issue I'm having.

### Nix

Nix is several things:

- A package manager serving the nixpkgs repository containing over 100,000 packages.
  - Nix can be used on various distros, as well as MacOS (nix-darwin).
  - Nix package manager isolates packages from each other using the "Nix store" concept.
- The language in which NixOS and nixpkgs configuration files are written.
  - The Nix language is a functional programming language allowing for concise and reproducible configuration.
- A build tool enabling reproducible builds of packages and configurations.

Here's an example of a part of a `.nix` config:

```nix
{pkgs, ...}: {
  home.packages = with pkgs; [
    pinentry-gtk2
  ];

  home = {
    username = "p";
    homeDirectory = "/home/p";
  };
}
```

### NixOS

NixOS is a Linux distribution built on top of Nix, providing:

- A declarative configuration model, where the user describes the desired system configuration.
  - NixOS configuration files define the desired state of the system, which is then built and managed by Nix.
- A set of tools for managing the system configuration, including `nixos-rebuild` and `nixos-config`.
- A community-driven repository of configuration modules, allowing users to easily customize their system.

[EOF]{.hidden}
