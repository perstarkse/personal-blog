---
title: Speedrunning Ethereum
date: 26/03/2024
description: My journey through the great experience of the programme at Speedrun Ethereum.
---

# Speedrunning Ethereum, BuidlGuidl style.

[Zen and the art of ethereum development, the BuidlGuidl way]{.subtitle}

## Intro

BuidlGuidl is a curated group of Ethereum builders creating products, prototypes, and tutorials to enrich the web3 ecosystem. Providing video tutorials, newsletters and coordination tools.

They also maintain a full stack solution for developing great dapps with the [Scaffold-ETH 2 toolkit](https://github.com/scaffold-eth/scaffold-eth-2). A solution that I highly recommend for getting going and prototyping.

[Speedrun Ethereum](https://speedrunethereum.com/) is an intensive, hands-on program designed to help developers quickly learn and master the skills needed to build decentralized applications (dApps) on the Ethereum blockchain. Created by the team at BuidlGuidl, this program is known for its practical, project-based approach to Ethereum development.

## Prerequisites

To get the most out of the Speedrun Ethereum program, it's recommended that you have a basic understanding of the following:

- JavaScript or TypeScript
- Solidity (the programming language for Ethereum smart contracts)
- Some familiarity with tools like Hardhat and ethers.js, which are commonly used in Ethereum development

## Speed Run Ethereum

The programme contains 8 challenges in total, providing opportunities to explore state channels, multisig wallets, SVG NFTs and more. The tooling provided makes the overhead minimal, improving the chance of actually learning the essential skills.

### Simple NFT Example, Challenge #0

🎫 Create a simple NFT to learn basics of 🏗 scaffold-eth. You'll use 👷‍♀️ HardHat to compile and deploy smart contracts. Then, you'll use a template React app full of important Ethereum components and hooks. Finally, you'll deploy an NFT to a public network to share with friends! 🚀

### Decentralized Staking App, Challenge #1

🦸 A superpower of Ethereum is allowing you, the builder, to create a simple set of rules that an adversarial group of players can use to work together. In this challenge, you create a decentralized application where users can coordinate a group funding effort. The users only have to trust the code.

### Token Vendor, Challenge #2

🤖 Smart contracts are kind of like "always on" vending machines that anyone can access. Let's make a decentralized, digital currency (an ERC20 token). Then, let's build an unstoppable vending machine that will buy and sell the currency. We'll learn about the "approve" pattern for ERC20s and how contract to contract interactions work.

### Join BuidlGuidl

When you've completed the first three challenges you have the option to join the BuidlGuidl.

### Build a DEX, challenge #4

The challenge is to build a simple DEX solution, where the user can seamlessly trade a ERC20 token with ETH. You will implement the pricing logic `x * y = k`.

### State Channel Application, challenge #5

This challenge was really quite interesting. In this challenge, you'll build a state channel application that enables users to exchange value-for-service at high frequency. You'll create a contract that collects ETH from clients and keeps track of balances, implement off-chain service exchange between the contract owner and clients, and add a challenge mechanism with a timeout to protect clients.

## Cohort 4

I recently recieved an invitation to join the fourth batch of the BG batch program. The github repo for the shared project is [here](https://github.com/BuidlGuidl/batch4.buidlguidl.com/tree/main).

It involved checking in to the deployed contract using a own deployed proxy contract, setting up a socials page and contributing to what you want. I chose to be helpful with reviews, comments and implementing a graph plotting when the builders checked in to the smart contract.

![Chart](/images/buidlguidl-batch-4.png){style="margin-left:auto; margin-right:auto"}.

The experience was very pleasant, people were helpful and encouraging. 10/10 🚀

## Final project

The wonderful people at buidlguidl have set up a grants solution, where you can apply with an idea and get funding which I generously was given for my idea. What I chose to develop was a community building experience. The users submit inspirations to a contract and the application generates a story from these inspirations which is then presented in the application together with appropriate artwork.
