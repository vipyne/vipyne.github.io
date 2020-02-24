var hiNerds = (function(){
  // TODO: make ascii art VP with ˙˚
  console.log('%c ', 'color: #e5e5e5; padding-top: 100%; padding-bottom: 50%; padding-right: 100%; background: #e5e5e5; font-size: 14px;');
  console.log('%c ', 'color: #d664bb; padding-bottom: 50%; padding-right: 100%; background: #d664bb; font-size: 14px;');
  console.log('%c ', 'color: #ae5dc6; padding-bottom: 50%; padding-right: 100%; background: #ae5dc6; font-size: 14px;');
  console.log('%c ', 'color: #864fad; padding-bottom: 50%; padding-right: 100%; background: #864fad; font-size: 14px;');
  console.log('%c ', 'color: #5b4193; padding-bottom: 50%; padding-right: 100%; background: #5b4193; font-size: 14px;');
  console.log('%c ', 'color: #3c2960; padding-bottom: 100%; padding-right: 100%; background: #3c2960; font-size: 14px;');
  console.log('%c Congratulations!', 'color: #e5e5e5; background: #3c2960; font-size: 12px;');
  console.log('');
  console.log('%c Your reward for snooping here is my ode to the marquee tag:', 'color: #e5e5e5; background: #3c2960; font-size: 12px;');
  console.log('%c https://github.com/vipyne/marquisDeArcaneciel/', 'color: #ae5dc6; background: #3c2960; font-size: 12px;');
  console.log('');
  console.log('%c And a link to my super secret old tumblr:', 'color: #e5e5e5; background: #3c2960; font-size: 12px;');
  console.log('%c http://gemintheruff.tumblr.com/', 'color: #ae5dc6; background: #3c2960; font-size: 12px;');
  console.log('');
  console.log('%c And further proof of whimsy:', 'color: #e5e5e5; background: #3c2960; font-size: 12px;');
  console.log('%c https://vipyne.github.io/getUserMedia_play/', 'color:#ae5dc6; background: #3c2960; font-size: 12px;');
  console.log('');

  // ode to C
  return 0;
})

var all = (function(window, document, undefined){
  console.log('');
  console.log('function hiNerds');
  // console.log('');
/////////////////////////////

window.location = '#';

// V P   D O T S ////////////
/////////////////////////////
/////////////////////////////

var scale = 1;
var sWidth = 435 / scale;
var sHeight = 260 / scale;
var sRadius = 6 / scale;
var sTextSize = 314 / scale;
var rows = 11;
var cols = 19;

var textNameCanvas = document.createElement('canvas');
textNameCanvas.setAttribute('class', 'header-float');
textNameCanvas.style.position = 'absolute';
textNameCanvas.style.margin = '50px 50px 0';
var bgInsert = document.getElementsByClassName('social-media')[0];
document.getElementById('header').insertBefore(textNameCanvas, bgInsert);
textNameCanvas.width = sWidth;
textNameCanvas.height = sHeight;
var textNameCanvasContext = textNameCanvas.getContext('2d');

var dotMatrix = textNameCanvasContext;
var radius = sRadius;
var xIncrement = sWidth/cols;
var yIncrement = sHeight/rows;
// V P text
var textSize = sTextSize;
textNameCanvasContext.font = 'bold ' + sTextSize + 'px sans-serif';
textNameCanvasContext.textBaseline = "middle";
textNameCanvasContext.textAlign = "left";
textNameCanvasContext.fillStyle = 'rgba(250, 250, 250, 0.01)'; // super high transparency
textNameCanvasContext.fillText('VP', xIncrement, sHeight/2);
// is pixel inside a letter?
function pixelUsed(x, y) {
  var textPixels = textNameCanvasContext.getImageData(x, y, sWidth, sHeight);
  var pixel = textPixels.data;

  for (var i = 0, pixelLength = pixel.length; i < pixelLength; i += 4) {
    if ( pixel[i + 2] > 250) {
      return true;
    }
    return false;
  }
}
// iterate and draw dots !
// dotMatrix.fillStyle = '#b2321e'; // maroon
var dotColor = ['#d664bb','#d664bb','#ae5dc6','#864fad','#864fad','#5b4193','#3c2960'];

for (var i = 1; i < rows; i++) {
  dotMatrix.fillStyle = dotColor[i];
  for (var j = 1; j < cols; j++) {
    var center = [xIncrement * j, yIncrement * i];
    if (pixelUsed(center[0], center[1])) {
      dotMatrix.beginPath(); // this effects rasteration... its interesting
      dotMatrix.moveTo(center[0], center[1]);
      dotMatrix.arc(center[0], center[1], radius + j/1.8 - 5, 0, 2 * Math.PI, false);
      dotMatrix.fill();
      dotMatrix.closePath();
    }
  }
}

//     B G     //////////////
// D U S T //////////////////
/////////////////////////////
/////////////////////////////
var headerBefore = document.getElementById('header');

var dustCanvas = document.createElement('canvas');
dustCanvas.setAttribute('id', 'dusty');
dustCanvas.style.position = 'absolute';
dustCanvas.width = window.innerWidth - 50;
dustCanvas.height = window.innerHeight;
var canvasW = dustCanvas.width;
var canvasH = dustCanvas.height;
var dustCanvasContext = dustCanvas.getContext('2d');
document.getElementsByClassName('mainy')[0].insertBefore(dustCanvas, headerBefore);

var randomTotal = Math.random() * (370 - 300) + 300;
dustCanvasContext.strokeStyle = 'rgba(50, 50, 50, 0.03)';
dustCanvasContext.globalCompositeOperation = 'darken';
dustCanvasContext.lineCap = 'round';

for (var i = 0; i < randomTotal; i++) {
  var randomStartX = Math.random() * canvasW;
  var randomEndX = Math.random() * (randomStartX - (randomStartX - 10)) + (randomStartX - 10);
  var randomStartY = Math.random() * canvasH;
  var randomEndY = Math.random() * (randomStartY - (randomStartY - 10)) + (randomStartY - 10);
  var longThinFactor = Math.abs(randomStartY - randomEndY);
  var strokeWidth = Math.random() * 4 - longThinFactor;
  var rotation = Math.random() * (15 - 10) - 10;

  dustCanvasContext.shadowColor = 'rgba(1, 1, 1, 1)';
  dustCanvasContext.shadowBlur = 3;
  dustCanvasContext.beginPath();
  dustCanvasContext.moveTo(randomStartX + rotation, randomStartY);
  dustCanvasContext.quadraticCurveTo(randomStartX, randomStartY, randomEndX, randomEndY);
  dustCanvasContext.lineWidth = strokeWidth;
  dustCanvasContext.stroke();
}

// B G   T O P //////////////
// C O R N E R //////////////
/////////////////////////////
/////////////////////////////
var roundedCornerDim = 200;

var topCornerCanvas = document.createElement('canvas');
topCornerCanvas.style.position = 'absolute';
topCornerCanvas.width = roundedCornerDim;
topCornerCanvas.height = roundedCornerDim;
var topCornerCanvasContext = topCornerCanvas.getContext('2d');
document.getElementsByClassName('mainy')[0].insertBefore(topCornerCanvas, headerBefore);

topCornerCanvasContext.globalCompositeOperation = 'source-over';
topCornerCanvasContext.shadowBlur = 0;
topCornerCanvasContext.closePath();
topCornerCanvasContext.moveTo(0, 0);

topCornerCanvasContext.arc(roundedCornerDim, roundedCornerDim, roundedCornerDim, 0, 2 * Math.PI, false);
topCornerCanvasContext.clip();

topCornerCanvasContext.fillStyle = 'rgba(255, 255, 255, 255)';
topCornerCanvasContext.fillRect(0, 0, roundedCornerDim, roundedCornerDim);

var cornerPixels = topCornerCanvasContext.getImageData(0, 0, roundedCornerDim, roundedCornerDim);
var cPixel = cornerPixels.data;

for (var i = 0, cPixelLength = cPixel.length; i+4 < cPixelLength; i += 4) {
  cPixel[i] = 255;  // just make them all white...
  cPixel[i + 1] = 255;
  cPixel[i + 2] = 255;
  cPixel[i + 3] = Math.abs(255 - cPixel[i + 3]); // only show the ones we want
}
topCornerCanvasContext.putImageData(cornerPixels, 0, 0);

// B G   B O T //////////////
// C O R N E R //////////////
/////////////////////////////
/////////////////////////////

var bottomCornerCanvas = document.createElement('canvas');
bottomCornerCanvas.style.float = 'right';
bottomCornerCanvas.style.margin = '-200px 0';
bottomCornerCanvas.width = roundedCornerDim;
bottomCornerCanvas.height = roundedCornerDim;
var bottomCornerCanvasContext = bottomCornerCanvas.getContext('2d');
var allWrapBefore = document.getElementById('all-wrap');
document.getElementsByClassName('mainy')[0].insertBefore(bottomCornerCanvas, allWrapBefore);
bottomCornerCanvasContext.globalCompositeOperation = 'source-over';
bottomCornerCanvasContext.shadowBlur = 0;
bottomCornerCanvasContext.closePath();

bottomCornerCanvasContext.moveTo(roundedCornerDim, roundedCornerDim);
bottomCornerCanvasContext.arc(0, 0, roundedCornerDim, 2 * Math.PI, false);
bottomCornerCanvasContext.clip();

bottomCornerCanvasContext.fillStyle = 'rgba(255, 255, 255, 255)';
bottomCornerCanvasContext.fillRect(0, 0, roundedCornerDim, roundedCornerDim);

var cornerPixels = bottomCornerCanvasContext.getImageData(0, 0, roundedCornerDim, roundedCornerDim);
var cPixel = cornerPixels.data;

for (var i = 0, cPixelLength = cPixel.length; i+4 < cPixelLength; i += 4) {
  cPixel[i] = 229;  // just make them all white...
  cPixel[i + 1] = 229;
  cPixel[i + 2] = 229;
  cPixel[i + 3] = Math.abs(255 - cPixel[i + 3]); // only show the ones we want
}
bottomCornerCanvasContext.putImageData(cornerPixels, 0, 0);

// L I N K S ////////////////
/////////////////////////////
/////////////////////////////

// todo: sight source
var addEvent = function(theEvent, element, func){
  if(element.addEventListener){
    element.addEventListener(theEvent, func, false)
  }else if(element.attachEvent){
    element.attachEvent('on' + theEvent, func)
  }
}
var hover = (function(){
  var host = ''
  var afterSrc = function(icon){
    var hover
    var id = icon.getAttribute('id')
    var hoverIcons = {
      'github': 'img/github-hover.png',
      'twitter': 'img/twitter-hover.png',
      'linkedin': 'img/linkedin-hover.png',
      'instagram': 'img/instagram-hover.png',
      'tumblr': 'img/tumblr-hover.png'
    }
    hover = hoverIcons[id]
    return host + hover
  }

  var beforeSrc = function(icon){
    var img
    var id = icon.getAttribute('id')
    var hoverIcons = {
      'github': 'img/github.png',
      'twitter': 'img/twitter.png',
      'linkedin': 'img/linkedin.png',
      'instagram': 'img/instagram.png',
      'tumblr': 'img/tumblr.png'
    }
    img = hoverIcons[id]
    return host + img
  }

  var hoverEvent = function(icon){
    addEvent('mouseover', icon, function(icon){
      this.src = afterSrc(this)
    })
    addEvent('mouseout', icon, function(icon){
      this.src = beforeSrc(this)
    })
  }

  var allIcons = function(){
    var github = document.getElementById('github')
    var twitter = document.getElementById('twitter')
    var linkedin = document.getElementById('linkedin')
    var instagram = document.getElementById('instagram')
    var tumblr = document.getElementById('tumblr')
    hoverEvent(github)
    hoverEvent(twitter)
    hoverEvent(linkedin)
    hoverEvent(instagram)
    hoverEvent(tumblr)
  }

  return {
    allIcons: allIcons
  }

})()

hover.allIcons()

// G I F S //////////////////
/////////////////////////////
/////////////////////////////

var gifPicLinks = (function() {
  var gifHolder = document.getElementsByClassName('gif')[0];
  var linkPics = function(link) {
    var id = link.getAttribute('id');
    var pics = {
      // 'marquee' : './img/marquee.gif',
      'targa'   : './img/targa-1.png',
      'giffy'   : './img/pizzaDog.gif',
      'webglol' : './img/lolcube.gif',
      'shader'  : './img/bubbles.gif'
    }
    return pics[id];
  }

  var hovering = function(hyperlink) {
    addEvent('mouseover', hyperlink, function(){
      gifHolder.className = 'gif';
      document.getElementsByClassName('gif')[0].className = 'gif';
      document.getElementsByClassName('gif')[0].className = 'gif ' + hyperlink.getAttribute('id');
      document.getElementsByClassName('gif-holder')[0].style.visibility = 'visible';
      gifHolder.style.visibility = 'visible';
    });
    addEvent('mouseout', hyperlink, function(){
      gifHolder.className = 'gif fadeout ' + hyperlink.getAttribute('id');
    });
  };

  var allLinks = function() {
    // var marquee = document.getElementById('marquee');
    var targa = document.getElementById('targa');
    var giffy = document.getElementById('giffy');
    var webglol = document.getElementById('webglol');
    var shader = document.getElementById('shader');
    // hovering(marquee);
    hovering(targa);
    hovering(giffy);
    hovering(webglol);
    hovering(shader);
  }

  return {
    allLinks : allLinks
  };

})();

gifPicLinks.allLinks();

// S U B L I M I N A L //////
/////////////////////////////
/////////////////////////////
setTimeout( function subliminalMessage() {
  window.location = encodeURI('#___________________________________hey, there...');
  setTimeout( function removeSubliminalMessage() {
    window.location = '#';
    setTimeout( function secondMessage() {
      window.location = '#___________________________________...open the console!';
    }, 1200);
  }, 2000);
}, 4000);

/////////////////////////////
})(window, document)
