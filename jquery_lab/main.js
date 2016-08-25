// document.addEventListener("DOMContentLoaded", init);
// var init = function() {
// };

// this ensures that the web page contents have completely loaded.
// when it has completely loaded the "ready" function all be called.
$(document).ready(function(){
  // do something
  //Exercise 1
  // 1. Select all shapes
  $('.shape');
  // 2. Select all black shapes
  $('.shape.black');
  // 3. Count the number of shapes
  $('.shape').length;
  // 4. Count the number of black shapes
  $('.shape.black').length;
  $('.black.shape').length;
  // 5. Count the number of black shapes AND blue shapes
  $('.shape.black, .shape.blue').length;
  // 6. Select all h1 tags
  $('h1');
  // 7. Select all small circles
  $('.small.circle');

  // EXERCISE 1 - PART 2
  // 1. Select all red shapes inside the orange container
  $('#orange-container .shape.red');
  // 2. Select all medium and small shapes inside the green
  $('#green-container .small.shape, #green-container .medium.shape');
  // $('#green-container > .small.shape, .medium.shape');
  // 3. Select all shapes inside any container
  $('.container .shape');
  // 4. Select all link tags
  $('a');
  // 5. Select all the link tags inside an "li" tag
  $('li a');
  // 6. Count the number of small blue circles
  $('.small.blue.circle').length;


  // this will grab the attrib value
  $('a')[0];
  $('a').eq(0);

  $('a').attr('href'); // will only select one
  // this will set all href to google.com
  $('a').attr('href', 'http://www.google.com'); // will change all
  $('a').attr('class', 'highlight'); // will change all

  $('a').eq(0).attr('href', 'http://www.codecore.ca');

  // $('a#my-link') // target a specific link

  // 1. Get the "href" attribute of the first link on the page
  $('a').attr('href');
  $('a').eq(0).attr('href');
  $('a')[0].attr('href');
  $('a').first().attr('href');

  // 2. Set the "href" attribute of all links on the page to "http://
  // www.codecore.ca". Try clicking one.
  $('a').attr('href', 'http://www.codecore.ca');

  // 3. Set the "class" attribute of all links to "highlight"
  $('a').attr('class', 'highlight');

  // 4. Set the "class" attributes of all shapes to "highlight". What
  // happened?
  $('.shape').attr('class', 'highlight');

  // Manipulators
  // 1. Remove all blue shapes
  $('.shape.blue').remove();
  // 2. Remove all shapes in the orange container
  $('#orange-container.shape').remove();
  // 3. Remove all small red circles
  $('.small.red.circle').remove();
  // 4. Get the html contents of the reset button.
  $('#reset').html();
  // 5. Try to get the html contents of all links. What happened?
  $('a').html(); // only the first match is returned
  // 6. Change the reset button to read "Launch Missiles!"
  $('#reset').html('Launch Missiles!');
  // 7. Change all the H1 tags to read "[Your Name] is Cool!"
  $('h1').html('Nancy is cool!');

  // 1. Select all the shapes in the purple container using "children"
  $('#purple-container').children();
  $('#purple-container').children('.shape');
  // 2. Select the green container using "parent"
  $('.shape.red.medium.diamond').parent();
  $('.shape').parent('#green-container');
  // 3. Select all the "li" tags that contain a link.
  $('li').children('a');

  // effects
  $('#purple-container').hide();
  $('#purple-container').show();
  // toggling the display property in css

  // events
  $('h1').on('click', function() {
     console.log("Hello 14s!!!");
  });

  //
  // 1. When any shape is clicked, log "shape clicked" to the
  // console
  $('.shape').on('click', function() {
    console.log('shape clicked');
  });
  // 2. When your mouse enters any blue circle, log "Blue Circle:
  // Go away!" to the console.
  $('.blue.circle').on('mouseover', function(){
    console.log("Blue Circle: Go away!");
  });
  $('.blue.circle').on('mouseenter', function(){
    console.log("Blue Circle: Go away!");
  });
  // 3. When your mouse leaves a blue circle, log "Blue Circle:
  // Goodbye! to the console.
  $('.blue.circle').on('mouseleave', function(){
    console.log("Blue Circle: Goodbye!");
  });
  // 4. When your mouse enters any "tr", set its class to "highlight".
  $('tr').on('mouseover', function() {
    $('tr').attr('class', 'highlight');
  });
  // 5. When your mouse leaves any "tr", set its class to "".
  $('tr').on('mouseleave', function() {
    $('tr').attr('class', '');
  });

  // 1. When 'button 1' is clicked, remove all shapes.
  $('#button-1').on('click', function(){
    $('.shape').remove();
  });

  // 2. When 'button 2' is clicked, disable button 2. (Set the
  // 'disabled' attribute to true).
  $('#button-2').on('click', function(){
    $('#button-2').attr('disabled', 'true');
    $('#button-2').attr('disabled', true);
    $(this).attr('disabled', true);
  });

  // 3. When 'button 3' is clicked, set the button message to
  // "Button 3 was clicked"
  $('#button-3').on('click', function(){
    $('#button-message').html('Button 3 was clicked');
  });

  $('#button-3').click(function(){
    $('#button-message').html('is this possible!?!!?');
  });


  $('.shape').on('mouseover', function() {
    $('.shape').attr('class', 'highlight');
  });

  $('.shape').mouseover(function() {
    $(this).addClass('highlight');
  });

  // document.getElementById('green-container')
  // $('#green-container')

  // please highlight shapes when moused over
  // $('.shape').mouseover(function(){
  //   $(this).addClass('highlight');
  // });
  // // please unhighlight shapes when mouse leaves
  // $('.shape').mouseleave(function(){
  //   $(this).removeClass('highlight');
  // });

  // please make the shapes highlight on and off like a light switch using
  // only one event called click
  $('.shape').click(function(){
    $(this).toggleClass('highlight');
  });

  // make sure you use short form and this
});
