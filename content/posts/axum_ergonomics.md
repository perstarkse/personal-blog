---
title: Axum Ergonomics - HTML response middleware
date: 15/05/2025
datetime: 1742073657
description: Using an axum middleware to simplify development in a SSR rendering context with Axum.
---

# Axum Ergonomics - HTML response middleware

```
.layer(map_response_with_state(app_state.clone(), with_template_response))
```
  
## Why?

Developing a web application using Rust, Axum and Minijinja is *fun* and once the design and groundwork is laid it's quite easy, maintainable and performant. I'm not in any way an expert, continously finding new ways handle recurring issues and challenges. Recently I took a gander on refactoring my growing application. With the amount of routes growing I took a look at simplifying the conversion of state into HTML.

I'm using [MiniJinja](https://docs.rs/minijinja/latest/minijinja/index.html) a templating engine which I highly recommend. I explored a couple (Askama, Tera) before settling on MiniJinja. Simplifying a bit, it uses Serde to serialize values and passes it to the templates which it then renders into HTML, which then the handler returns as a response to the request.

Looking through the Axum documentation there is [map_response_with_state()](https://docs.rs/axum/latest/axum/middleware/fn.map_response_with_state.html), which is a function to create a middleware that transforms the response sent from the handler. This means we can localize all HTML rendering to this middleware. 

## Axum

## Minijinja

## Challenges
