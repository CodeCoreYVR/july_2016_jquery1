// morning cohort 14!!!
var array = [1,2,3];

//variable
var func = function (x) {
  return x * x;
};

for (var i=0; i<array.length; i++) {
  var value = func(array[i]);
  console.log(value);
}

// isEven
var isEven = function(x) {
  return x % 2 === 0;
};

var isEven = function(x) {
  if ( x % 2 === 0 ) {
    return true;
  } else {
    return false;
  }
};

// function isEven(x) {
//   return x % 2 === 0;
// }

console.log(isEven(100)); // true
console.log(isEven(50));  // true
console.log(isEven(35));  // false

// higher order function - a function that takes in a function as a parameter
// or returns a function
// array filter is an example of a higher order function
[1,2,3,4].filter(isEven);  // [2, 4]
console.log([1,2,3,4].filter(isEven));  // [2, 4]


// PLS type into your javascript console
for (var i=0; i<document.links.length; i++) {
  document.links[i].style.color = "red";
}




// lab 1 - jason
$('#firstHeading').html('Jason')

$('#bodyContent').hide();
$('body').hide();

$('a.mw-wiki-logo').hide();
$('a.mw-wiki-logo').remove();
$('.mw-wiki-logo').removeClass();
$('#p-logo').remove();

$('#logo a').attr('href', 'http://www.google.ca');
$('a').html('Dilpeet');
$('a').length;
$('a').eq(0);









//
