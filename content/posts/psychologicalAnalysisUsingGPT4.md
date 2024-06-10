---
title: Validating Psychological Insight from Chat - An LLM-Driven Approach (GPT-4o)
date: 10/06/2024
datetime: 1717970400
description: This article details an abbreviated form of the research paper I wrote on the subject of using Large Language Models (LLMs) for psychological analysis of chat messages, focusing on work/educational-related stress. I analyzed anonymized data from a Discord chat group consisting of students from an educational program, collected longitudinally from fall 2022 to summer 2023.
---

# Using LLMs to do Psychological Research: Validating Insights with the Demand-Control-Support Model

When GPT-3.5 and GPT-4 were released, my interest in NLP models skyrocketed. I'd previously dabbled in NLP, but these powerful new tools opened up exciting possibilities. One area that particularly intrigued me was the potential to analyze the online communication of students in my web development program. We had a lively Discord chat group where we shared information, laughs, and frustrations related to the education – a rich dataset for exploring student experiences.

This article provides a glimpse into my research, which delves into the validity of using LLMs for psychological analysis. I've recently updated the study with a new model, GPT-4.0, and the findings are even more compelling.

## Introduction

This study investigates whether Large Language Models (LLMs) can accurately capture and interpret psychological constructs from online communication, specifically focusing on the relationship between the demand-control-support model and student sentiment. I analyzed anonymized chat data from our Discord group, collected over an academic year.

## Background

Traditional methods for psychological analysis, like manual coding or surveys, can be time-consuming and may not fully capture the nuances of online communication. LLMs offer a promising alternative, but their validity in this domain requires rigorous testing.

## The Demand-Control-Support Model

This model posits that the interplay of demands, control, and social support plays a critical role in an individual's stress levels and well-being. High demands coupled with low control and lack of support can lead to increased stress, while a sense of control and strong support can buffer against these negative effects.

## Method

Using a custom Python script, I parsed and cleaned the Discord chat data. Then, I employed the GPT-4.0 model through the OpenAI API to analyze the text, extracting measures of perceived demands, control, support, and sentiment from weekly chunks of conversation.

## Key Findings

The results were striking. The LLM-derived insights strongly aligned with the predictions of the demand-control-support model:

- **Control Matters:** A strong positive correlation emerged between perceived control and positive sentiment, suggesting that students who felt more in control of their learning experienced greater well-being.
- **Support as a Buffer:** The negative impact of high demands on sentiment was significantly reduced when students perceived strong support from peers or instructors.

These findings provide compelling evidence that LLMs can effectively capture and interpret psychologically meaningful information from online communication.

## Implications and Future Directions

The ability of LLMs to extract these insights has profound implications for understanding and supporting student well-being. By analyzing chat data, educators could gain a real-time understanding of student experiences, identify those who might be struggling, and tailor interventions to foster a more supportive and empowering learning environment.

While this study focused on a specific context, future research should explore the generalizability of these findings across diverse educational settings and LLM models. Additionally, direct validation against established psychological measures will further strengthen the validity of this approach.

## Conclusion

This research demonstrates the exciting potential of LLMs as powerful tools for psychological research. By leveraging these advanced technologies, we can gain deeper insights into the complex dynamics of human experience, ultimately paving the way for more effective interventions and support systems to promote well-being in education and beyond.
