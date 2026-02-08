---
title: Tangible Interfaces
---

<style>
h2 {margin-top:3em;}

</style>

<div class="toc-wrapper" markdown="1">

### Contents

{: .no_toc}

- TOC
{:toc}
</div>

## Tangible Interfaces Lab

The Tangible Interfaces Lab at Pratt Institute, created by
[Steve Turbek](https://turbek.com), explores interaction design beyond the touchscreen. We design for touch, hearing, and the many other senses that people possess.

> "Software is eating the world" [claimed Marc Andreessen in 2011](https://www.wsj.com/articles/SB10001424053111903480904576512250915629460).

Many consumer products, from cameras to "walkmen" to car dashboards are now simply apps on featureless glass screens. This leads to bland product design and customer dissatisfaction.

**_Tangible Interfaces are an opportunity for designers_**

When &ldquo;everything is an app and all apps look the same&rdquo; physical interaction is an opportunity for industrial designers to create innovative new
products.

In car design, touch screens have become a safety concern. ["Touch Screen controls take four times longer to perform simple tasks"](https://www.vibilagare.se/english/physical-buttons-outperform-touchscreens-new-cars-test-finds)

## [Blog](blog)

{% for post in site.posts limit:4 %}

### [{{ post.title }}]({{ post.url | relative_url }})

{{ post.excerpt }}

{% endfor %}

## [Class](class.html)

Tangible Interfaces Senior Industrial Design Studio at Pratt Institute, created by
[Steve Turbek](https://turbek.com).

The studio focuses on designing for tactile and sensory experiences to build interactive user experiences embodied in physical products. The studio
is built around iterative prototyping with extensive use of electronic components, 3D modeling/printing. It will introduce basic electronics
using the BBC Microbit, a very simple computer board with a rich sensor package and excellent introductory software. No previous experience of UX or
electronics is expected.

We explore the theory and practices of the User Experience Design Process in the context of physical object design. User Research and testing are
integral to our process. Our designs must not only be beautiful; we must have the open mindset to validate our designs with users to improve them.

### Projects

Class projects that demonstrate Tangible Interfaces

- [Music Remote](projects/project-microbit-media-remote.md)
- [Personal Submersible Cockpit](https://turbek.com/Tangible-Interfaces-Submarine-Design-Project/)
- [Hacky Bird](projects/project-hacky-bird.md)

## [Code Library](code.html)

Sample code, tutorials, and reusable snippets for working with sensors, actuators, and communication protocols. Start here to get your prototypes up
and running quickly.

## [Hardware](hardware.html)

An overview of microcontrollers, sensors, motors, and other components used in the course. Includes pinout diagrams, specs, and tips for choosing
the right parts for your project.

## [Further reading and references](references.html)

Books, articles, and online resources on tangible interaction design, physical computing, and related fields.
