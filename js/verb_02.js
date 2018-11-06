function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const now = new Date();
function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
}
var shape = document.querySelector(".shape");
var width = randomNumber(60, 200);
var height = randomNumber(60, 200);
var width1=randomNumber(60,200);
var width2=randomNumber(60,200);
var width3=randomNumber(60,200);
var width4=randomNumber(60,200);
shape.style.width = width + "px";
shape.style.height = height + "px";
var variation_2 = document.querySelector(".variation-2");
variation_2.style.width=width1+"px";
variation_2.style.height=height+"px";
var variation_3 = document.querySelector(".variation-3");
variation_3.style.width=width2+"px";
variation_3.style.height=height+"px";	
var variation_4 = document.querySelector(".variation-4");
variation_4.style.width=width3+"px";
variation_4.style.height=height+"px";	
var variation_5 = document.querySelector(".variation-5");
variation_5.style.width=width4+"px";
variation_5.style.height=height+"px";	