---
layout: default
title: Blog
permalink: /blog/
---

# Blog

Welkom op het blog van **Automatiseer Je Sales**! Hier deel ik inzichten, tips en handleidingen over het automatiseren van sales- en marketingprocessen met **n8n** en **Power Automate**.

## Recente Artikelen

<div class="blog-grid">
  {% for post in site.posts %}
    <div class="card">
      <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
      <p class="post-meta">Gepubliceerd op {{ post.date | date: "%d-%m-%Y" }}</p>
      <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
      <a href="{{ site.baseurl }}{{ post.url }}" class="button">Lees Meer</a>
    </div>
  {% endfor %}
</div>

## Categorieën

- **n8n Workflows**: Tips en trucs voor n8n.
- **Power Automate**: Automatisering met Power Automate.
- **Sales Automatisering**: Automatiseer je salesprocessen.
- **Marketing Automatisering**: Tips voor marketingautomatisering.

## Abonneer je

Wil je op de hoogte blijven van nieuwe artikelen? Volg me op:

- [LinkedIn](https://www.linkedin.com/in/{{ site.linkedin_username }}/)
- [Twitter](https://twitter.com/{{ site.twitter_username }})

<style>
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }
  
  .post-meta {
    color: var(--light-text);
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
</style>