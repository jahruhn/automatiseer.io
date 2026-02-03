---
layout: default
title: Home
description: "Kant-en-klare n8n en Power Automate workflows voor sales, marketing en business processen. Bespaar tijd en geld met onze templates."
---

<div class="hero-section">
  <div class="hero-content">
    <h1>Automatiseer Je Sales & Marketing met n8n en Power Automate</h1>
    <p class="hero-subtitle">Kant-en-klare workflows voor sales, marketing en business processen. Bespaar tijd en geld met onze templates. Geen technische kennis nodig!</p>
    <a href="{{ site.baseurl }}/templates" class="cta-button">Bekijk Templates</a>
  </div>
  <div class="hero-image">
    <img src="{{ site.baseurl }}/assets/images/hero-placeholder.svg" alt="Automatiseer je sales">
  </div>
</div>

---

## 🔥 Populaire Templates

<div class="templates-grid">
  {% for template in site.data.templates limit:3 %}
  <div class="template-card">
    <h2>{{ template.title }}</h2>
    <p>{{ template.description }}</p>
    <a href="{{ template.url }}" class="button">Bekijk Template</a>
  </div>
  {% endfor %}
</div>

[Bekijk alle templates →]({{ site.baseurl }}/templates)

---

## 💡 Waarom Onze Templates?

<div class="features">
  <div class="feature">
    <h3>🎯 Gemaakt door een Expert</h3>
    <p>10+ jaar ervaring in sales en automatisering.</p>
  </div>
  <div class="feature">
    <h3>⚡ Direct Inzetbaar</h3>
    <p>Werkt out-of-the-box in n8n of Power Automate.</p>
  </div>
  <div class="feature">
    <h3>📖 Stapsgewijze Handleidingen</h3>
    <p>Duidelijke instructies voor elke workflow.</p>
  </div>
</div>

---

## 📦 Hoe Werkt Het?

<div class="steps">
  <div class="step">
    <h3>1. Kies een Template</h3>
    <p>Selecteer een workflow uit onze bibliotheek.</p>
  </div>
  <div class="step">
    <h3>2. Betaal Veilig</h3>
    <p>Gebruik Stripe (iDEAL/creditcard) of Coinbase (crypto).</p>
  </div>
  <div class="step">
    <h3>3. Download Direct</h3>
    <p>Ontvang meteen de workflow en handleiding.</p>
  </div>
  <div class="step">
    <h3>4. Ga Aan de Slag!</h3>
    <p>Importeer in n8n/Power Automate en automatiseer!</p>
  </div>
</div>

---

## 💬 Wat Klanten Zeggen

> "Met de LinkedIn Sales Navigator-template van Jeroen heb ik **mijn leadgeneratie geautomatiseerd** en bespaar ik nu 5 uur per week!" — *Peter, Sales Manager*

---

## 🛒 Betalen

### LinkedIn Sales Navigator Template
**Prijs: €50**

{% include stripe_button.html
  title="LinkedIn Sales Navigator Template"
  description="Automatiseer je LinkedIn-leads met Power Automate/n8n"
  price="50"
  stripe_id="buy_btn_123"
  coinbase_id="prod_123"
%}
---

## 📞 Contact

Vragen? Stuur een bericht via [LinkedIn](https://www.linkedin.com/in/{{ site.linkedin_username }}/) of e-mail: `<jouw-email>`.

