---
layout: default
title: Blog
---

# Blog

Welkom op het blog van **Automatiseer Je Sales**! Hier deel ik inzichten, tips en handleidingen over het automatiseren van sales- en marketingprocessen met n8n en Power Automate.

## Recente Artikelen

{% for post in site.posts %}
  - [{{ post.title }}]({{ site.baseurl }}{{ post.url }}) ({{ post.date | date: "%d-%m-%Y" }})
{% endfor %}

## Categorieën
- **n8n Workflows**: Tips en trucs voor n8n.
- **Power Automate**: Automatisering met Power Automate.
- **Sales Automatisering**: Automatiseer je salesprocessen.
- **Marketing Automatisering**: Tips voor marketingautomatisering.

## Abonneer je
Wil je op de hoogte blijven van nieuwe artikelen? Volg me op [LinkedIn](https://www.linkedin.com/in/{{ site.linkedin_username }}/) of [Twitter](https://twitter.com/{{ site.twitter_username }}).