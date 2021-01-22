# 10dollarshirt

<p align="center">
  <img src="screenshot.png">
</p>

We only sell medium-sized white shirts for $10, that's all.

This website idea came up as a joke, when my friend said that creating a website requires a lot of options about technology stack, marketing and more. I then remembered this quote from Obama and said that we should build this. He takes it as a joke, I don't.

## Installation

Install the dependencies:

### `gatsby install`

Run the development server:

### `gatsby develop`

Production build to `/public`:

### `gatsby build`

## Content

Each of the sections in the site are placed in `src/sections`. Data is usually separated out into objects/arrays to be rendered in the component.

## SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

## Styling

This project uses [styled-components]() to handle styling: `src/styles/theme.js` defines the styling base and `src/styles/GlobalStyles.js` includes basic element styles along with the CSS Reset.
