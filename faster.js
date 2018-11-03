// Pass a callback that will be triggered real-time with the next animation
export default (selector = 'canvas', cb) => {
  if (!cb) {
    cb = selector;
    selector = 'canvas';
  }
  const canvas = document.querySelector(selector);
  const ctx = canvas.getContext('2d');
  let width;
  let height;
  let data;

  const size = () => {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    width = canvas.width;
    height = canvas.height;
    data = ctx.getImageData(0, 0, width, height);
  };
  size();

  const start = new Date();
  let index = 0;
  const redraw = () => {
    const time = (new Date() - start) / 1000;
    ctx.putImageData(data, 0, 0);
    cb({ canvas, ctx, start, time, width, height, index }, primitives);
    index++;
    requestAnimationFrame(redraw);
  };
  redraw();

  window.addEventListener('resize', size);
};
