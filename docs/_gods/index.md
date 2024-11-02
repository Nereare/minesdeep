---
title: Gods
layout: default
is_index: true
permalink: /gods/
---

{% if site.gods.size > 1 %}
| God/ess | Domain | Alignment | Pseudonyms |
| :-----: | :----: | :-------: | :--------- |
{% for article in site.gods %}
{% unless article.is_index %}
| [{{ article.title }}]({{article.url}}) | {{ article.domain }} | {{ article.align }} | {{ article.pseudonyms | join('<br>') }} |
{% endunless %}
{% endfor %}
{% else %}
No gods to be listed.
{% endif %}
