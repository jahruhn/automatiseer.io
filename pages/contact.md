---
layout: default
title: Contact
---

# Contact

Heb je vragen, opmerkingen of wil je samenwerken? Vul onderstaand formulier in en ik neem zo snel mogelijk contact met je op.

## Contactformulier

<!-- You can add a form here using a service like Formspree or Netlify Forms -->
<form name="contact" method="POST" data-netlify="true" action="/success">
  <input type="hidden" name="form-name" value="contact" />
  <div>
    <label for="name">Naam:</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div>
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div>
    <label for="message">Bericht:</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <button type="submit">Verzenden</button>
</form>

## Andere manieren om contact op te nemen
- **LinkedIn**: [{{ site.linkedin_username }}](https://www.linkedin.com/in/{{ site.linkedin_username }}/)
- **GitHub**: [{{ site.github_username }}](https://github.com/{{ site.github_username }})
- **Twitter**: [{{ site.twitter_username }}](https://twitter.com/{{ site.twitter_username }})