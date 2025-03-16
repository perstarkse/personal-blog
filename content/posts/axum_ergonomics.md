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

Developing a web application using Rust, Axum and Minijinja is *fun* and once the design and groundwork is laid it's quite easy, maintainable and performant. I'm not in any way an expert, continously finding new ways handle recurring issues and challenges. Recently I took a gander on refactoring my growing application. With the amount of routes growing I took a look at simplifying the conversion of state into HTML. During this work I came across a quite enjoyable approach which I thought I'd share given my enjoyment of it, and that it it isn't too widely used. ![public/images/map_response_with_state.png]

I'm using [MiniJinja](https://docs.rs/minijinja/latest/minijinja/index.html) a templating engine which I highly recommend. I explored a couple (Askama, Tera) before settling on MiniJinja. Simplifying a bit, it uses Serde to serialize values and passes it to the templates which it then renders into HTML, which then the handler returns as a response to the request.

Looking through the Axum documentation there is [map_response_with_state()](https://docs.rs/axum/latest/axum/middleware/fn.map_response_with_state.html), which is a function to create a middleware that transforms the response sent from the handler. This means we can localize all HTML rendering to this middleware. With all the rendering being handled there, we can employ rusts great type system to handle the actual response from the handler.

This is an example of how a handler could look. Do note that there are other approaches that might be more concise for constructing the context than mine, but I enjoy being a bit strict and having a struct for passing the response, which helps when refactoring, catching errors that might occur when changing the data types returned from helper functions for example.

```
pub async fn show_text_content_edit_form(
    State(state): State<HtmlState>,
    RequireUser(user): RequireUser,
    Path(id): Path<String>,
) -> Result<impl IntoResponse, HtmlError> {
    let text_content = User::get_and_validate_text_content(&id, &user.id, &state.db).await?;

    #[derive(Serialize)]
    pub struct TextContentEditModalData {
        pub user: User,
        pub text_content: TextContent,
    }

    Ok(TemplateResponse::new_template(
        "content/edit_text_content_modal.html",
        TextContentEditModalData { user, text_content },
    ))
}
```

## Axum

## Minijinja

## Challenges
