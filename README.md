## to reproduce it

1. run `build` script
  You can see `about.html`, `aboutcopy.html`, and so on in `dist`
2. run `preview` script
  The css font will be wrong except `noproblem.html`

In the dev mode this situation will not show. This bug may apply all the at-rules in theory.


## I found the accidental case

1. all pages in `pages` use `HoverList.astro` compontent (that have `style` tag)

  the bundled css will be hoisted, the hoisted css order is normal, you can try delete the `noproblem.astro` and `index.astro` then run `build` script

2. move `import` statement from `BaseHead.astro`

  if the `import '../../styles/global.css'` move to `default.astro`, the bundle order is normal.

3. remove `style` tag within `HoverList.astro`

  yes, there is no bundle order problem.