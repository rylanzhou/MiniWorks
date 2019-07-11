/* eslint-disable no-undef */

const timeline = new TimelineMax({ onUpdate: () => { timeline.progress(); } });
const timeline2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

timeline.from('blockquote', 0.5, { x: 200, opacity: 0 });
timeline.from('span', 1, { width: 0 }, '=-.5');
timeline.from('#office', 1, { x: -200, opacity: 0 }, '=-1');
timeline.from('#building', 1, { x: 200, opacity: 0 }, '=-1');

timeline2.from('#box', 1, { x: 0, opacity: 0, scale: 0 });
timeline2.from('#box', 0.5, {
  left: '20%', scale: 1.3, borderColor: 'white', borderWidth: 12,
});

new ScrollMagic.Scene({
  triggerElement: '.sticky',
  triggerHook: 'onLeave',
  duration: '100%',
})
  .setPin('.sticky')
  .setTween(timeline)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: 'blockquote',
})
  .setTween(timeline2)
  .addTo(controller);
