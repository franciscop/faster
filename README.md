# faster-faster

Tiny function to repaint into a canvas in fullscreen mode. Just worry about your state and not about repainting manually:

```js
faster(({ ctx, width, height }) => {
  ...
});
```

## Getting started

Npm install:

```bash
npm install faster-faster
```

```js
import faster from 'faster-faster';
```

CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/faster-faster"></script>
```

Will do:

- Change the width and height appropriately on window resize.
- Use `requestAnimationFrame` so that it slows down when the tab is not visible.
-

Properties:

- `canvas`: the canvas element itself.
- `ctx`: the active canvas context so that you can manipulate it as needed.
- `start`: the Date() of the first paint.
- `time`: the time relative to the `start` time in seconds.
- `width`: the canvas width as an integer.
- `height`: the canvas height as an integer.
- `index`: the paint counter.

You very likely need this CSS:

```css
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: black;
}
canvas {
  background: black;
  display: block;
}
```
