---
layout: default
title: Contact
permalink: /contact/
---

# Neem Contact Op

Heb je vragen, opmerkingen of wil je samenwerken? Vul onderstaand formulier in en ik neem zo snel mogelijk contact met je op.

## Contactformulier

<form name="contact" method="POST" netlify>
  <div class="form-group">
    <label for="name">Naam:</label>
    <input type="text" id="name" name="name" required class="form-control">
  </div>
  
  <div class="form-group">
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required class="form-control">
  </div>
  
  <div class="form-group">
    <label for="message">Bericht:</label>
    <textarea id="message" name="message" required class="form-control" rows="5"></textarea>
  </div>
  
  <button type="submit" class="button">Verzenden</button>
</form>

## Andere Contactmogelijkheden

- **E-mail**: [{{ site.email }}](mailto:{{ site.email }})
- **LinkedIn**: [{{ site.linkedin_username }}](https://www.linkedin.com/in/{{ site.linkedin_username }}/)
- **GitHub**: [{{ site.github_username }}](https://github.com/{{ site.github_username }})
- **Twitter**: [{{ site.twitter_username }}](https://twitter.com/{{ site.twitter_username }})

<style>
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--card-bg);
    color: var(--text-color);
    font-family: inherit;
  }
  
  textarea.form-control {
    resize: vertical;
    min-height: 120px;
  }
</style>