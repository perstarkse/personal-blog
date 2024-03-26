---
title: Using LLMs to do Psychological Research, a Feasibility Study
date: 26/03/2024
description: This article details an abbreviated form of the research paper I wrote on the subject of using Large Language Models (LLMs) for psychological analysis of chat messages, focusing on work/educational-related stress. I analyzed anonymized data from a Discord chat group consisting of students from an educational program, collected longitudinally from fall 2022 to summer 2023.
---

# Using LLMs to do Psychological Research, a Feasibility Study

When GPT-3.5 and GPT-4 was released my interest for NLP models peaked. I'd previously had some interaction with NLP, but not much. One potential target of interest at the time was related to the educational programme I was attending. I was attending a two year programme in web development provided at distance. We had a Discord chat group, in which me, and other students exchanged information, laughs and frustrations related to the education.

This article details an abbreviated form of the research paper I wrote on the subject, spanning over the different concepts related, method, results and discussions presented.

It was a fun project and paper to write. To view the graphics in a more interactive way please visit [https://sentiment.perstark.xyz](https://sentiment.perstark.xyz){target="\_blank" rel="noopener noreferrer"}

## Introduction

This study explores the feasibility of using Large Language Models (LLMs) for conducting psychological analysis on chat messages, focusing on work/educational-related stress. The research utilizes anonymized data from a Discord chat group consisting of students from an educational program, collected longitudinally from fall 2022 to summer 2023.

### Background

Natural language processing (NLP) has made significant strides with the advent of LLMs, which have demonstrated remarkable capabilities in various language-related tasks. However, their application in psychological analysis of text data remains relatively unexplored.

### Demand-Control-Support Model

The demand-control-support model suggests that the interaction between job demands, job control, and social support plays a crucial role in determining an individual's level of stress. High demands, coupled with low control and lack of support, are associated with increased stress levels and poor psychological well being.

### Stress and learning

Vygotsky's concept of Zone of Proximal Development (ZPD) provides insight into the relationship between stress and learning. Learning occurs most effectively when students are challenged within their ZPD, creating a moderate level of stress or "positive stress". However, too high stress levels might impact learning negatively, as well as impact psychological well being negatively.

### Large Language Models

LLMs are a type of deep learning model that has been trained on vast amounts of data, enabling them to understand and generate natural language. Given enough diverse training data, these models perform well across many areas of interest without any additional supervision.

### Purpose

This study aims to explore the feasibility of using a Large Language Model (LLM) to analyze chat messages and interpret various psychological phenomena, focusing on work/educational-related stress.

## Method

The data was collected from a Discord chat group used by students of the EC Fullstack .NET webbutvecklare program. A custom Python script was developed to parse and clean the data. The sentiment analysis of the collected and parsed Discord data was conducted using the same Python script, which connects to the OpenAI API and employs the GPT-3.5-turbo model to perform the analysis on the input text data.

## Results

The results showed some variety in sentiment over time based on the current course. Average sentiment for the courses ranged between 46.33 to 60.5 with some variety in standard deviation.

![Sentiment Over Time](/plots/sentimentTime.png){style="margin-left:auto; margin-right:auto"}

Pearson's r correlation coefficients were calculated to examine the relationships between the Demand-Control-Support model variables (Control, Demand, Support) and sentiment scores. The results showed a moderate positive correlation between Control and Sentiment (r = 0.48, p = 0.002), suggesting that higher levels of perceived control were significantly associated with more positive sentiment in the chat messages. In contrast, there was a weak negative correlation between Demand and Sentiment (r = -0.27, p = 0.099), indicating that higher levels of perceived demands were slightly associated with more negative sentiment, but that this association was not significant at p < 0.05. The correlation between Support and Sentiment was weakly positive (r = 0.25, p = 0.130), suggesting that higher levels of perceived support were somewhat associated with more positive sentiment, but that this association was not significant at p < 0.05.
![Pearson's R](/plots/pearsonsR.png){style="margin-left:auto; margin-right:auto; scale: 0.8"}

A multiple linear regression analysis was conducted to examine the relationship between sentiment and three independent variables: control, demand, and support. The analysis aims to determine the impact of these variables on sentiment and assess the overall fit of the regression model. The regression results indicate that the model explains approximately 39.2% of the variation in sentiment (R-squared = 0.392). Looking at the individual coefficients, control has a positive and statistically significant relationship with sentiment (coefficient = 1.1861, p-value = 0.001), suggesting that as control increases relative to its mean, sentiment tends to increase as well. On the other hand, demand has a negative and statistically significant relationship with sentiment (coefficient = -0.7388, p-value = 0.005), indicating that higher levels of demand relative to its mean are associated with lower sentiment. Support has a positive coefficient (0.2506) but is not statistically significant (p-value = 0.232), suggesting that changes in support relative to its mean do not have a significant impact on sentiment.
![Multiple Linear Regression Analysis](/plots/regressionAnalysis.png){style="margin-left:auto; margin-right:auto"}

## Discussion

The study demonstrates the feasibility of using Large Language Models (LLMs) for conducting psychological analysis on chat messages, specifically focusing on work/educational-related stress. The findings suggest that LLMs can provide meaningful insights into the dynamics of stress and well-being in educational settings.

The sentiment analysis conducted using the LLM aligns with established psychological theories such as the demand-control-support model and the Zone of Proximal Development. The positive correlation between perceived control and sentiment and the negative correlation between perceived demands and sentiment are consistent with these theories, indicating that the LLM is able to capture important psychological phenomena from the chat messages.

The multiple linear regression analysis further supports the validity of the LLM's analysis. The model explains a significant portion of the variation in sentiment, and the individual coefficients for control and demand are statistically significant and in line with theoretical expectations. This suggests that the LLM is able to identify and quantify the impact of these variables on sentiment.

## Conclusion

This study provides preliminary evidence for the feasibility of using LLMs to conduct psychological analysis on chat messages. The LLM's ability to capture psychological phenomena and provide meaningful insights suggests that it has the potential to be a valuable tool for researchers and practitioners in the field of psychology.

Future research should explore the use of LLMs in different psychological contexts and with diverse data sources. Additionally, direct validation against established psychological measures would strengthen the validity of the LLM's analysis.. However, further research is needed to address the limitations of the current study and establish the reliability and validity of using LLMs for psychological analysis.
