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
  
  var portfolioContentURL = {
    'Amal': 'assets/md/amal.md',
    'AREZ': 'assets/md/arez.md',
    'BBB': 'assets/md/beirut by byte.md',
    'BrainTank': 'assets/md/braintank.md',
    'CB': 'assets/md/coffee beans.md',
    'DISCOVERY': 'assets/md/discovery.md',
    'Edutek': 'assets/md/edutek.md',
    'FS': 'assets/md/futuristic school.md',
    'HIKMA': 'assets/md/hikma.md',
    'Kindi': 'assets/md/kindi.md',
    'Maktabatech': 'assets/md/maktabatech.md',
    'PEDD': 'assets/md/pedd.md',
    'Pitchworthy': 'assets/md/pitchworthy.md',
    'TA': 'assets/md/the alternative.md',
    'UL': 'assets/md/unique learna.md',
    'VT': 'assets/md/virtual-teacher.md'
  }
  
  var portfolioTitle = {
    'PEDD': 'PEDD',
    'CB': 'Cofee Beans',
    'AREZ': 'AREZ',
    'BBB': 'Beirute By Byte',
    'TA': 'The Alternative',
    'Kindi': 'Kindi',
    'DISCOVERY': 'DISCOVERY',
    'Maktabatech': 'Maktabatech',
    'BrainTank': 'BrainTank',
    'UL': 'Unique Learna',
    'Amal': 'Amal',
    'FS': 'Futuristic School',
    'VT': 'Virtual-Teacher',
    'HIKMA': 'HIKMA',
    'Edutek': 'Edutek',
    'Pitchworthy': 'Pitchworthy'
  }
  
  function setPortfolioContent(teamId) {
    console.log(teamId);
    
    jQuery.get(portfolioContentURL[teamId], function(data) {
      $('#portfolio-title').text(portfolioTitle[teamId]);
      var md = window.markdownit();
      $('#portfolio-content').html(md.render(data));
    });
  }
  
  $('#PEDD-tile').click(function () {setPortfolioContent('PEDD')});
  $('#CB-tile').click(function () {setPortfolioContent('CB')});
  $('#AREZ-tile').click(function () {setPortfolioContent('AREZ')});
  $('#BBB-tile').click(function () {setPortfolioContent('BBB')});
  $('#TA-tile').click(function () {setPortfolioContent('TA')});
  $('#Kindi-tile').click(function () {setPortfolioContent('Kindi')});
  $('#DISCOVERY-tile').click(function () {setPortfolioContent('DISCOVERY')});
  $('#Maktabatech-tile').click(function () {setPortfolioContent('Maktabatech')});
  $('#BrainTank-tile').click(function () {setPortfolioContent('BrainTank')});
  $('#UL-tile').click(function () {setPortfolioContent('UL')});
  $('#Amal-tile').click(function () {setPortfolioContent('Amal')});
  $('#FS-tile').click(function () {setPortfolioContent('FS')});
  $('#VT-tile').click(function () {setPortfolioContent('VT')});
  $('#HIKMA-tile').click(function () {setPortfolioContent('HIKMA')});
  $('#Edutek-tile').click(function () {setPortfolioContent('Edutek')});
  $('#Pitchworthy-tile').click(function () {setPortfolioContent('Pitchworthy')});
  
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