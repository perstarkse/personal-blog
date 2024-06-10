---
title: Getting Started with pass - A Self-Hosted, Secure, and CLI-Friendly Password Manager
date: 27/04/2024
datetime: 1714168800
description: Learn how to set up and use pass, a self-hosted, secure, and CLI-friendly password manager, to efficiently manage your passwords with features like multiline inserts, rofi-pass, and pass-otp.
---

# Getting Started with pass: A Self-Hosted, Secure, and CLI-Friendly Password Manager

As a long-time user of 1Password, I've grown accustomed to the convenience and security it provides. However, I've always been disappointed with the CLI experience. The command-line interface is clunky and limited, making it difficult to manage my passwords efficiently. That's why I decided to explore alternative solutions, and I'm excited to share my experience with `pass`, a self-hosted, secure, and CLI-friendly password manager.

### Prerequisites

Before we dive into setting up `pass`, you'll need a few prerequisites:

1. **GPG key**: You'll need a GPG key to encrypt your password store. I highly recommend using `gpg-tui` for managing your GPG keys. It's a user-friendly, terminal-based interface that makes it easy to generate and manage your keys.
2. **gnupg**: You'll also need `gnupg` installed on your system. This is a requirement for `pass` to function properly.

### Installing pass

Installing `pass` is a breeze. You can use your favorite package manager to install it. If you're using NixOS, you can use `nix-shell -p pass` to create a temporary "install" environment.

### Initializing the Password Store

Once `pass` is installed, you can initialize the password store using the following command:

```
pass init
```

This will create a new password store in the default location `~/.password-store`.

### Setting up the Git Repo

To store your passwords securely, you'll need to set up a Git repository. You can do this using the following command:

```
pass git init
```

This will create a new Git repository in the `~/.password-store` directory.

### Setting up the Remote Tracking Repo

To ensure that your password store is backed up and accessible across multiple devices, you'll need to set up a remote tracking repository. I recommend using a private GitHub repository for this purpose.

### Generating Passwords

`pass` comes with a built-in password generator that can generate strong, unique passwords for you. You can use the following command to generate a new password:

```
pass generate
```

### Inserting Passwords with Multiline Support

One of the most powerful features of `pass` is its support for multiline inserts. This allows you to add not only passwords but also additional information such as usernames, notes, and more. To insert a new password with multiline support, you can use the following command:

```
pass insert multiline
```

This will open a text editor where you can enter your password and additional information in a formatted way. For example:

```
Username: myusername
Password: mypassword
URL: https://example.com
Notes: This is a note about the password
```

This makes it easy to store and manage complex password entries with additional information.

### Using rofi-pass

`rofi-pass` is a powerful plugin that allows you to search and manage your passwords using the `rofi` fuzzy finder. To use `rofi-pass`, simply execute the following command:

```
rofi-pass
```

This will open a `rofi` interface where you can search and manage your passwords.

### Using pass-otp

`pass-otp` is a plugin that allows you to manage one-time passwords (OTPs) using `pass`. One of the most useful features of `pass-otp` is the ability to scan QR codes and add OTPs to your password store. You can use the following command to scan a QR code and add an OTP to your password store:

```
xclip -selection clipboard -t image/png -o - | zbarimg -q --raw - | pass otp append <your_entry>
```

This command uses `xclip` to capture the QR code from the clipboard, `zbarimg` to decode the QR code, and `pass otp` to add the OTP to your password store.

### pass for iOS

If you're an iOS user, you'll be happy to know that there's a `pass` app available for [iOS devices](https://github.com/mssun/passforios). The app allows you to access your password store on the go, with a simple and intuitive interface. You can search, view, and copy passwords, as well as generate new passwords using the app's built-in password generator.

To get started with `pass for iOS`, simply download the app from the App Store and follow the setup instructions. You'll need to configure the app to connect to your password store, which can be done using the app's built-in Git integration. So far from my own use I'm very pleased, it handles OTP codes great.

### Conclusion

In this post, we've covered the basics of setting up `pass`, a self-hosted, secure, and CLI-friendly password manager. With `pass`, you can manage your passwords efficiently and securely, using a command-line interface that's both powerful and intuitive. The multiline insert feature, `rofi-pass` plugin, and `pass-otp` plugin make it easy to manage complex password entries, search and manage your passwords, and add OTPs to your password store. I hope this guide has been helpful in getting you started with `pass`. Happy password managing!
