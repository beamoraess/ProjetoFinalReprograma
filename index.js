$(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
       $("#navbar").addClass("navbar-effect");
      } else {
       $("#navbar").removeClass("navbar-effect");
      }
    });
  });