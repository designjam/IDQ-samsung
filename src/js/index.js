
'use strict';

gsap.registerPlugin(ScrollTrigger);

function init() {

  var boxes = gsap.utils.toArray('.part');

  boxes.forEach(function (box, i) {
    var anim = gsap.fromTo(box, { autoAlpha: 0, y: 0 }, { duration: 1, autoAlpha: 1, y: 0 });
    ScrollTrigger.create({
      id: '' + box.getAttribute('class'),
      trigger: box,
      animation: anim,
      start: 'center center',
      end: 'center 100px',
      scrub: true,
      pin: true
    });
  });
}

window.addEventListener('load', function () {
  init();
});