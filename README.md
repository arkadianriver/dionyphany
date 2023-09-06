# dionyphany

A portfolio and blog theme, inspired by the design of the
[astro-portfolio-template](https://astro.build/themes/details/maewolff-portfolio-template/),
by Maxence Wolff, but quite a departure from the original.

See Demo at https://arkadianriver.github.io/dionyphany/


## Use

This is a theme for the Hugo static-site generator (SSG).


## Notes

**What I wanted:**

- _Clean and elegant design._
  I was inspired by Maxence's theme,
  with its thin Open Sans font, plenty of spacing, and few graphics.

- _The background graphic._
  I grew fond of having a scenic splash page on my original site
  and didn't want to give that up, even if only in the background.

- _Translucent canvas._
  I've always liked the _smooth glass feel_ of a slightly raised,
  sharp, translucent canvas with round edges.

- _Header navigation that's always accessible._
  I'm often frustrated having to scroll all the way to the top to access the site navigation,
  which is why I chose the HTML5Up Spectral theme for my previous web site.
  At the same time, the real estate that the nav takes up is valuable,
  particularly on smaller devices.
  I was happy to discover [react-headroom](https://kyleamathews.github.io/react-headroom/)
  and how it hides and shows the header based on scroll actions.
  I mimicked that behavior here.

- _Hugo._
  I originally wanted to try out Astro for the scoped styles and JavaScript language.
  This is when I discovered Max's theme, which I was going to build from.
  However, I had second thoughts about using Tailwind and an npm eco-system,
  in general, having to keep the dependencies up-to-date.
  Also, I found that as static-site generators go, Astro's not yet mature.
  Too many of the features I wanted, I would have had to write myself with JavaScript.
  I get it, Astro is more than an SSG. But, since all I wanted was an SSG,
  I went with the fastest, easiest to install/deploy, fairly feature-rich, and all-around
  best one that I knew of&mdash;Hugo.

- _Miscellaneous._
  - I want to try translation with Crowdin, so I made the theme with multi-lingual in mind..
  another reason to choose Hugo with its great G11n support.
  - Light, dark, and custom color themes.
  - My portfolio was getting kinda long. So to aid in finding items of interest,
  I made the roles and skills filterable.

**Dev notes:**

I thought it useful to keep track of why a few things are the way they are
should I need to make changes down the road.
Some are captured in comments, others here.

- When clicking links, the background image (`.bgimage`) reloads and flashes in Firefox.
  I changed all links to use `htmx` to replace only `#main` rather than reload
  the whole page (with the `usehtmx: true` config option).

- Chroma adds a focusable tabindex to `pre` elements, but I added a tabindex to the `pre > code`
  elements as well because it looks better for it to be scrollable on overflow than the `pre` block
  with that tiny bit of padding.

- Code block CSS rules got a little messy to accomodate Goldmark's various code block styles
  and also the custom scrollbars.
  There are three ways to code the code blocks (with a shortcode, backticks, or indented four spaces).
  For line numbers in code blocks, the `table` option is used to remove line numbers from copied content.
  Finally, the scrollbar customizations are different across browsers.
  
- I was going to be lazy and allow for only one author byline, but while creating the exampleSite with
  the _Hugo Authors_ having created some existing content, I carried over the `data/authors.yml` feature to
  allow for multiple authors (such as on a site with syndicated contributors).

**To Do:**

- [ ] When testing on an actual mobile device, the side padding and margins
  needed to be cut dramatically for optimum content real estate.
  This was when it was clear that my choice of `--variables` could be better
  optimized for easier global changes. For example, instead of five gap and
  margin sizes, I could stick with fewer sizes and calc() as necessary so that
  refactoring the sizes is proportional (similar to ems and rems). Or, I could
  assign variables to specific purposes rather than generalizing them, such as
  assigning one variable to control all text that should be left-aligned along
  the same line.

- [ ] As much as I've tried to keep things nicely spaced,
  I feel the works listings might be a bit too rich with text, with not enough
  variation in the font sizes.
  I might want to have an option for a graphic, card-based portfolio instead.
  Any bugs, suggestions, or features you want? Don't hesitate to open a GitHub issue.

- [ ] Translate content and ensure all strings
  (including 'Copy'/'Copied' in Javascript) are enabled for xl8n.
  Also need a drop-down lang selector, and to also detect the locale's default.

- [ ] Fix shifting background on scroll of retracting address-bar on mobile.
