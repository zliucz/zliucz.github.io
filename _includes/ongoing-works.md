<h2 id="ongoing-work" style="margin: 2px 0px -15px;">Ongoing Works</h2>

<p style="margin: 30px 0;">
I am currently working on several research projects. My primary focus is on the application of AI in healthcare, as well as assisting different end users (such as clinicians, patients, and healthcare-related researchers) in making informed decisions through visualization and HCI methods. In addition, I am working on AI4Science and AI4Education.
</p>

<div class="publications">
<ol class="bibliography">
<ul style="display: flex; flex-wrap: wrap; list-style-type: none; padding: 0;">
{% for link in site.data.ongoing-work.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="height: 123px; width: 175px">
    {% endif %}
      {% if link.topic %} 
        <div class="badge" style="background-color: #bc6c25; color: #fff; position: absolute; top: 8px; left: 16px; display: flex; flex-wrap: wrap;">{{ link.topic }}</div>
      {% endif %}
  </div>
</div>
</li>

<br>

{% endfor %}
</ul>
</ol>
</div>

