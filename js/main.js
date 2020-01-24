// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 1200) {
//         $('#custom-nav').addClass('affix');
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//         $('.navbar-brand img').attr('src','./img/logo/logo-poweredbyjacobs.svg');
//     } else {
//         $('#custom-nav').removeClass('affix');
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//         $('.navbar-brand img').attr('src','./img/logo/logo-placeholder.svg')
//     }   
// });

$(document).ready(function() {

  // Gets the video src from the data-src on each button
  
  var $videoSrc;  
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);
  
    
    
  // when the modal is opened autoplay it  
  $('#vidModal').on('shown.bs.modal', function (e) {
      
  // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
  $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  })
    
  
  
  // stop playing the youtube video when I close the modal
  $('#vidModal').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#video").attr('src',$videoSrc); 
  }) 
      
      
  
  
    
    
  // document ready  
  });
  
  
  