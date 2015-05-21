(function() {
  // borrow jQuery from parent window
  if (typeof(jQuery) == "undefined") {
    var iframeBody = document.getElementsByTagName('body')[0];
    var jQuery = function (selector) { return parent.jQuery(selector, iframeBody); };
    var $ = jQuery;
  }

  function onResize() {
    // browser viewport size
    var w = window.innerWidth;
    var h = window.innerHeight;

    // stage dimensions
    var ow = 1920;
    var oh = 1080;

    // keep aspect ratio
    var scale = Math.min(w / ow, h / oh);
    stage.scaleX = scale;
    stage.scaleY = scale;

    // adjust canvas size
    stage.canvas.width = ow * scale;
    stage.canvas.height = oh * scale;
    // update the stage
    stage.update();

    // letterbox format taaaimmmm
    canvas.style.position = 'absolute';
    canvas.style.top = ((h - stage.canvas.height) / 2) + 'px';
  }

  // resize if the window is fiddled around with after load
  window.addEventListener('resize', onResize);

  // resize on iframe load
  $(document).ready(function() {
    setTimeout(onResize, 0);
  });
})();