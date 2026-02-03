---
layout: default
title: Templates
description: "Overzicht van alle n8n en Power Automate templates voor sales, marketing en business processen."
---

# Alle Templates

<div class="templates-grid">
  {% for template in site.data.templates %}
  <div class="template-card">
    <h2>{{ template.title }}</h2>
    <p>{{ template.description }}</p>
    <p><strong>Prijs: €{{ template.price }}</strong></p>
    <a href="{{ template.url }}" class="button">Bekijk Template</a>
  </div>
  {% endfor %}
</div>
