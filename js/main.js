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

(function($) {
    "use strict"; // Start of use strict
  
    // Detect when form-control inputs are not empty
    $(".cool-b4-form .form-control").on("input", function() {
      if ($(this).val()) {
        $(this).addClass("hasValue");
      } else {
        $(this).removeClass("hasValue");
      }
    });
  })(jQuery); // End of use strict