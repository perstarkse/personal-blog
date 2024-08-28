---
title: NixOS, a operating system for me?
date: 28/08/2024
description: Detailing my experience of using NixOS, it's benefits and drawbacks, and how you can work around it for a great experience.
---

# NixOS & Nix

[NixOS - The right amount of abstraction?]{.subtitle}

## Intro

For the past year or so I've been using NixOS for my systems. It started with a VM, included my workstation, work laptop, NAS, and more. All these systems are managed from the same configuration file and accessible on [github](https://github.com/perstarkse/nixos-config). For the past year I've experienced some frustrations, lots of learning, I've submitted a couple of packages to nixpkgs and taken over maintenance of some. 

What prompted this exploration was the experienced fragility, of several different systems. Even while having backups of, dotfiles, relevant etc files, a copy of installed packages, a system breaking would entail quite the process of restoring it to working order.

When I discovered NixOS with its declarative configurations, it just clicked. This post is my attempt to detail my current conceptual view on what NixOS is for me, what I enjoy about it, and some experienced frustrations along the way. If you haven't been in contact with Nix or NixOS before I'd recommend going to the bottom of the page an reading the short summary I wrote about Nix and NixOS.

## What is NixOS for me?

In it's completeness the best (albeit severly lacking) way I can describe it (or a subset of its components) is as a wrapper around a Linux system. It abstracts away several aspects to managing a system and services. Setting up a user, openssh and adding a public SSH key as a authorizedKey is as simple as adding:

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

None of these is hard to configure, and for a seasoned Linux user possibly something done in the sleep. But having this declared in a configuration file, and instantly applied makes things a breeze. 

### Other notable aspects for me is: 
- It's a way to ensure reproducibility of my systems. Backups are of course essential for data, but having the system itself be reproducible makes restoring quite a lot easier. 
- It's a way to document what changes I've made to a system, and with version control, it's timestamped and reversible. 

## On having the right amount of abstraction

Abstractions can be great, but they can also carry significant drawbacks. I think it's easy when looking at the example above to draw two conclusions: <strong>A</strong>, more can be done with less (code) and headspace. I do not have to remember all the commands, places in the filesystem and order of actions. <strong>B</strong>, one loses a certain connection to the underlying system. One can, and often should, read the modules/nixpkgs to find out what they do. And by doing so one can without a doubt learn the underlying.

I've heard the concern being voiced in the <em>r/nixos</em> community that using NixOS impeeds the learning journey. And to a large degree I agree. I think learning this more abstracted way is a shallower learning experience. But it also enables a wider scope. Most of us have somewhat limited time, and tools that enable us do more is generally good. One can wonder, to what purpose does the learning serve, being a gread sysadmin? If so perhaps it can be useful to run something else.

As always, key aspects to abstraction are to what degree it's at the correct level. Too abstracted and it becomes a hindrance, too little and it offers small benefits. As of writing I'm quite pleased with the amount. 

## Nix 

Nix is several things:
- A package manager serving the nixpkgs repository containing over 100 000 packages.
  - Nix can be used on a variety of distros, as well as MacOS (nix-darwin).
  - Nix package manager isolates packages from each other using a concept called the "Nix store".
- The language in which the configuration files of NixOS and the nixpkgs are written in.
  - The Nix language is a functional programming language allowing for concise and reproducible configuration.
- A build tool allowing for reproducible builds of packages and configurations.

This is how a part of a .nix config can look:
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

