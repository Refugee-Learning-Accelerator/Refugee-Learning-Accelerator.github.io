$(document).ready(function () {(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#topNav',
    offset: 54
  });
  
      
  $('#PEDD-tile').click(function () {$('#portfolio-title').text('PEDD')});
  $('#CB-tile').click(function () {$('#portfolio-title').text('Cofee Beans')});
  $('#AREZ-tile').click(function () {$('#portfolio-title').text('AREZ')});
  $('#BBB-tile').click(function () {$('#portfolio-title').text('Beirute By Byte')});
  $('#TA-tile').click(function () {$('#portfolio-title').text('The Alternative')});
  $('#Kindi-tile').click(function () {$('#portfolio-title').text('Kindi')});
  $('#DISCOVERY-tile').click(function () {$('#portfolio-title').text('DISCOVERY')});
  $('#Maktabatech-tile').click(function () {$('#portfolio-title').text('Maktabatech')});
  $('#BrainTank-tile').click(function () {$('#portfolio-title').text('BrainTank')});
  $('#UL-tile').click(function () {$('#portfolio-title').text('Unique Learna')});
  $('#Amal-tile').click(function () {$('#portfolio-title').text('Amal')});
  $('#FS-tile').click(function () {$('#portfolio-title').text('Futuristic School')});
  $('#Virtual-Teacher-tile').click(function () {$('#portfolio-title').text('Virtual-Teacher')});
  $('#HIKMA-tile').click(function () {$('#portfolio-title').text('HIKMA')});
  $('#Edutek-tile').click(function () {$('#portfolio-title').text('Edutek')});
  $('#Pitchworthy-tile').click(function () {$('#portfolio-title').text('Pitchworthy')});
  
  
  var text = '## Problem\n\
\n\
When refugee students go to university, the immediately have a language problem -- much of the classes are in English. While teachers speak in Arabic, textbooks and exams are in English. Students must do a lot of translation work: they check for online help, make notes in Arabic, and translate just to prepare the material for studying.\n\
\n\
This is in addition to the usual problem of going to university and not knowing many people and not having as much social support.\n\
\n\
## Solution\n\
\n\
We empower refugee students at universities to help each other to make the learning experience easier and more efficient via a mobile application to overlay notes/hints/discussions/questions on textbooks via AR technology.\n\
\n\
Students usually have their phones with them when they study. Now they can pull out their phone and immediately get useful information. Students can add or see notes that have already been added, and ask questions about particular content. Questions are shared with other students on the app, and students can mark useful questions and answers and so students who are most helpful can be rewarded in the app. Teachers can use the app to check answers and emphasize important material.\n\
\n\
## Team Members\n\
\n\
Sabine Abou Ezzi <binael@hotmail.com>\n\
\n\
Youssef Chamoun <youssefchamoun@hotmail.com>\n\
';
  var md = window.markdownit();
  
  console.log(md.render(text));

  $('#portfolio-content').html(md.render(text));
  
})(jQuery)});





//     var converter = new showdown.Converter();
//     var text = '## Problem\
// \
// When refugee students go to university, the immediately have a language problem -- much of the classes are in English. While teachers speak in Arabic, textbooks and exams are in English. Students must do a lot of translation work: they check for online help, make notes in Arabic, and translate just to prepare the material for studying.\
// \
// This is in addition to the usual problem of going to university and not knowing many people and not having as much social support.\
// \
// ## Solution\
// \
// We empower refugee students at universities to help each other to make the learning experience easier and more efficient via a mobile application to overlay notes/hints/discussions/questions on textbooks via AR technology.\
// \
// Students usually have their phones with them when they study. Now they can pull out their phone and immediately get useful information. Students can add or see notes that have already been added, and ask questions about particular content. Questions are shared with other students on the app, and students can mark useful questions and answers and so students who are most helpful can be rewarded in the app. Teachers can use the app to check answers and emphasize important material. \
// \
// ## Team Members\
// \
// Sabine Abou Ezzi <binael@hotmail.com>\
// \
// Youssef Chamoun <youssefchamoun@hotmail.com>\
// ';
//     $('#portfolio-content').html(converter.makeHtml(text));

    // var converter = new showdown.Converter();
    // var text = '#hello, markdown!';
    // $('#portfolio-title').text('Pitchworthy');
    // $('#portfolio-content').html(converter.makeHtml(text))  
      
      // {
      //   'PEDD': 'asdfasdf',
      //   'Cofee Beans': 'asdfasdf',
      //   'AREZ': 'asdfasdf',
      //   'Beirute By Byte': 'asdfasdf',
      //   'The Alternative': 'asdfasdf',
      //   'Kindi': 'asdfasdf',
      //   'DISCOVERY': 'asdfasdf',
      //   'Maktabatech': 'asdfasdf',
      //   'BrainTank': 'asdfasdf',
      //   'Unique Learna': 'asdfasdf',
      //   'Amal': 'asdfasdf',
      //   'Futuristic School': 'asdfasdf',
      //   'Virtual-Teacher': 'asdfasdf',
      //   'HIKMA': 'asdfasdf',
      //   'Edutek': 'asdfasdf',
      //   'Pitchworthy': 'asdfasdf'
      // }