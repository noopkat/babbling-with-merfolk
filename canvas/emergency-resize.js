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
    stage.update()

    canvas.style.position = 'absolute';
    canvas.style.top = ((h - stage.canvas.height) / 2) + 'px';

}
window.addEventListener("resize", onResize);