---
layout: default
title: Home
---

<div class="hero" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('{{ site.baseurl }}/assets/images/hero-bg.png'); background-size: cover; background-position: center; border-radius: var(--radius); margin-bottom: 40px;">
  <h1>Welkom bij Automatiseer Je Sales</h1>
  <p style="font-size: 1.2rem; max-width: 800px; margin: 0 auto 30px;">
    Automatiseer je sales- en marketingprocessen met kant-en-klare <strong>n8n</strong> en <strong>Power Automate</strong> workflows. Bespaar tijd en vergroot je productiviteit.
  </p>
  <a href="{{ site.baseurl }}/templates/" class="button" style="font-size: 1.1rem; padding: 15px 30px;">Ontdek Templates</a>
</div>

## Populaire Templates

<div class="templates-grid">
  <div class="card">
    <h3>AI Lead Scoring</h3>
    <p>Automatisch leads scoren op basis van interacties en gedrag.</p>
    <a href="{{ site.baseurl }}/templates/#ai-lead-scoring" class="button">Bekijk Template</a>
  </div>
  
  <div class="card">
    <h3>LinkedIn naar HubSpot Sync</h3>
    <p>Synchroniseer LinkedIn-leads direct met HubSpot.</p>
    <a href="{{ site.baseurl }}/templates/#linkedin-hubspot" class="button">Bekijk Template</a>
  </div>
  
  <div class="card">
    <h3>Automatische Contractverlengingen</h3>
    <p>Herinneringen en acties voor contractverlengingen.</p>
    <a href="{{ site.baseurl }}/templates/#contract-verlengingen" class="button">Bekijk Template</a>
  </div>
</div>

## Laatste Blogposts

<div class="blog-grid">
  {% for post in site.posts limit:3 %}
    <div class="card">
        <!-- added image optional -->
      <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
      <a href="{{ site.baseurl }}{{ post.url }}" class="button">Lees Meer</a>
    </div>
  {% endfor %}
</div>

## Waarom Automatiseren?

- **Tijd besparen**: Automatiseer repetitieve taken.
- **Fouten verminderen**: Menselijke fouten elimineren.
- **Schaalbaarheid**: Groei zonder extra inspanning.
- **Inzichten**: Betere data en rapportage.

<a href="{{ site.baseurl }}/templates/" class="button">Bekijk Alle Templates</a>

<style>
  .templates-grid, .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }
  
  .card {
    padding: 20px;
    border-radius: var(--border-radius);
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
  }
  
  .card h3 {
    margin-top: 0;
    border-bottom: none;
    padding-bottom: 0;
  }
</style>