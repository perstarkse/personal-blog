---
title: Quadratic Voting - weighted voting to extract more insights from polls and surveys
date: 03/01/2025
datetime: 1735937589893
description: Detailing the what, why and how of my implementation of QV in a forms application.
---

# Quadratic Voting - weighted voting to extract more insights from polls and surveys

## What is it

Quadratic voting (QV) is a voting system that allows participants to express how strongly they feel about different options. Unlike traditional voting where each person gets one equal vote, QV lets voters allocate "credits" across different choices, with the cost of additional votes increasing quadratically. For example, casting 3 votes costs 9 credits, while 4 votes costs 16 credits.

This mechanism helps prevent "tyranny of the majority" by giving people a way to show how much they care about specific issues. Voters can choose to spread their influence across many topics or concentrate it on what matters most to them.

## My usecase

As someone engaged in local politics, I've observed how traditional yes/no polling can miss important nuances. By implementing QV in my organization's decision-making process, I believe we can better understand not just what people support, but how strongly they feel about different initiatives. This leads to more informed decisions that better reflect our community's true preferences.

## History

QV emerged from early work by Vickrey, Clarke, and Groves on market mechanisms. However, it was E. Glen Weyl at Microsoft Research who developed and named the modern concept of Quadratic Voting. Weyl's primary motivation was addressing the "tyranny of the majority" problem in democratic systems, where concentrated majorities can systematically benefit at the expense of minorities.

The system has since been tested in various settings, from corporate governance to public policy. Notable implementations include the Colorado House of Representatives' use of QV to prioritize bills in 2019, and Volt Germany's application in determining party manifesto priorities.

## nxForm

Since I wanted to try this out for a organization that I am active in which I feel could benefit from the QV approach, I developed [nxForm](https://nxform.starks.cloud), a web application tailored to meet my specific needs.

The primary motivation came from language barriers within our organization - many members are more comfortable with Swedish than English. While several quadratic voting platforms exist, none offered Swedish localization. Additionally, I needed features like QR code sharing for in-person voting sessions and wanted full control over our data. Some existing solutions also had concerning issues, such as invalid SSL certificates.

Beyond solving immediate organizational needs, nxForm was conceived with research potential in mind. I also saw an opportunity to explore how quadratic voting might enhance psychological research, particularly in survey methodology. The ability to measure preference intensity could offer additional insights into human decision-making and group dynamics.

From a technical perspective, nxForm provided an exciting opportunity to work with cutting-edge technologies:

- **Frontend**: Built with SvelteKit, offering a smooth, responsive user experience
- **Backend**: Powered by Rust and the Axum framework, delivering exceptional performance and reliability
- **Infrastructure**: Deployed on AWS Lambda for scalability and cost-effectiveness

The choice of Rust and Axum for the backend proved particularly rewarding and **fun**. The combination offers outstanding ergonomics and developer experience, while maintaining the performance and safety guarantees Rust is known for. This tech stack not only ensures a snappy user experience but also provides the robustness needed for serious research applications.

![nxForm](/images/nxform.png){style="margin-left:auto; margin-right:auto;"}
