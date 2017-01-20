// Don't pollute the global namespace please
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var imageObj = new Image();

// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/

imageObj.onload = function() {
  var i;
  for (i = 0; i < 10000; i++) {
    context.drawImage(imageObj, Math.random() * 200, Math.random() * 300);
  }
};
imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';