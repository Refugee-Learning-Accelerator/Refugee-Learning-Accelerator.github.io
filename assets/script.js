(function($) {
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
  
  // function setPortfolio(teamName) {
  //   var converter = new showdown.Converter();
  //   var text = '#hello, markdown!';
  //   $('#portfolio-title').text('Pitchworthy');
  //   $('#portfolio-content').html(converter.makeHtml(text))
  // }
  
  var converter = new showdown.Converter();
  var text = '## Problem\
\
When refugee students go to university, the immediately have a language problem -- much of the classes are in English. While teachers speak in Arabic, textbooks and exams are in English. Students must do a lot of translation work: they check for online help, make notes in Arabic, and translate just to prepare the material for studying.\
\
This is in addition to the usual problem of going to university and not knowing many people and not having as much social support.\
\
## Solution\
\
We empower refugee students at universities to help each other to make the learning experience easier and more efficient via a mobile application to overlay notes/hints/discussions/questions on textbooks via AR technology.\
\
Students usually have their phones with them when they study. Now they can pull out their phone and immediately get useful information. Students can add or see notes that have already been added, and ask questions about particular content. Questions are shared with other students on the app, and students can mark useful questions and answers and so students who are most helpful can be rewarded in the app. Teachers can use the app to check answers and emphasize important material. \
\
## Team Members\
\
Sabine Abou Ezzi <binael@hotmail.com>\
\
Youssef Chamoun <youssefchamoun@hotmail.com>\
';
  // $('#portfolio-content').html(converter.makeHtml(text));

})(jQuery); // End of use strict
