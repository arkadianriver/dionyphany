---
author: Hugo Authors
title: Math Typesetting
date: 2019-03-08
description: A brief guide to setup KaTeX
math: true
---

Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries.
<!--more-->

{{< note "Editor note" >}}
Because this Dionyphany theme uses htmx, it provides shortcodes
that include <a href="https://katex.org/" target="_blank" rel="noopener noreferrer">KaTeX</a>
scripts automatically in-context. No need to configure math in your
page frontmatter or site configuration.
{{< /note >}}

### Examples

{{< math/inline >}}
<p>
Math inline: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
</p>
{{</ math/inline >}}

{{< math/block >}}
Block math:
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } } 
$$
{{</ math/block >}}
