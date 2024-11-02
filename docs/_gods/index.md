---
title: Gods
layout: default
is_index: true
permalink: /gods/
---

{% if site.gods.size > 1 %}
{% for article in site.gods %}
{% unless article.is_index %}
- [{{ article.title }}](article.url)
{% endunless %}
{% endfor %}
{% else %}
Not subarticles under this topic.
{% endif %}
