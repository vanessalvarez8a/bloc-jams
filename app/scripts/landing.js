$(document).ready(function() {
  $('.hero-content h3').hover(function() {
    $(this).css({'color':'#E22C68'});
    }, function() {
    $(this).css({'color':'#FFF'});  
  });

   //$('.hero-content h1').click(function() {
   // $(this).fadeOut();
  //});

  $('.hero-content h3').click(function() {
    var subText = $(this).text();
    $(this).text(subText + " !");
  });

  var onHoverAction = function(event) {
    $(this).animate({'margin-top': '10px'});
  };
  var offHoverAction = function(event) {
    $(this).animate({'margin-top': '0px'});
  };

  $('.selling-points .point').hover(onHoverAction, offHoverAction);
  
  //$('.selling-points h5').click(function() {
  // $(this).css({'font-size':'26px'});
// });
  
});
