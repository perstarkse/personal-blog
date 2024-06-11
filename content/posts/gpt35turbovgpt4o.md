---
title: GPT-4o vs. GPT-3.5-turbo - Major improvements regarding psychological analysis
date: 11/06/2024
datetime: 1718056800
description: See how GPT-4o significantly improves upon GPT-3.5 in analyzing student chat, revealing more nuanced insights into stress, control, and support in learning environments.
---

# GPT-4o vs. GPT-3.5: A Leap Forward in Psychological Insight from Chat Data

In my ongoing research exploring the validity of LLMs for psychological analysis, I recently made a significant change: switching from GPT-3.5 to GPT-4o. The results were remarkable, demonstrating a clear leap forward in the model's ability to capture and interpret nuanced psychological constructs from student chat data.

This blog post delves into the key differences I observed between the two models, highlighting the enhanced capabilities of GPT-4o for psychological research.

## A Deeper Dive into the Demand-Control-Support Model

My research focuses on the demand-control-support model, a well-established psychological theory that links perceived demands, control, and social support to stress and well-being. Using a custom Python script, I analyzed anonymized chat data from a student Discord group, extracting measures of these variables and overall sentiment.

## GPT-3.5: Promising, but Limited

My initial analysis using GPT-3.5-turbo yielded promising results, revealing moderate positive correlations between perceived control and sentiment (r = 0.48, p < 0.01) and weak negative correlations between perceived demands and sentiment (r = -0.27, p = 0.099). However, the model struggled to capture the nuanced interplay between the variables, with an R-squared value of 0.23.

## GPT-4o: A Step Change in Accuracy and Insight

Switching to GPT-4o resulted in a significant improvement in the model's performance:

- **Stronger Correlations:** GPT-4o revealed much stronger correlations between the variables, particularly the positive relationship between perceived control and positive sentiment (r = 0.824, p < 0.005). The correlation between support and sentiment was strongly positive (r = 0.0689, p < 0.005). It also captured a moderate negative correlation between demand and sentiment (r = -0.549, p < 0.005). This suggests a more accurate and sensitive understanding of the psychological dynamics at play.
- **Mitigating Effects:** GPT-4o effectively captured the mitigating effect of control and support on the negative impact of demands – a key aspect of the demand-control-support model that GPT-3.5 struggled to discern. This demonstrates a deeper comprehension of the complex relationships between these variables.
- **Increased Explanatory Power:** The multiple regression model using GPT-4o explained a significantly larger proportion of the variance in sentiment compared to the GPT-3.5 model, indicating a substantial improvement in the model's ability to predict and understand student emotional experiences (R-squared = 0.788, p < 0.0005).

## The Power of Advanced Reasoning

The enhanced performance of GPT-4o likely stems from its advanced reasoning capabilities and larger knowledge base. These improvements allow the model to:

- **Grasp Subtleties:** Better understand the nuances of human language and identify subtle cues related to psychological states.
- **Contextualize Information:** More effectively consider the context of conversations to accurately interpret the meaning behind student expressions.
- **Synthesize Complex Relationships:** Make more sophisticated connections between different variables, capturing the complex interplay of demands, control, and support.

## Conclusion: A Powerful Tool for Psychological Research

The significant improvements observed with GPT-4o highlight its potential as a powerful tool for psychological research. Its ability to extract nuanced insights from textual data opens up exciting new possibilities for understanding human behavior and experience.

While further validation is needed, this study demonstrates a clear leap forward in the capabilities of LLMs for psychological analysis. As these models continue to evolve, they hold immense promise for advancing our understanding of the human mind and informing the development of interventions to promote well-being.
