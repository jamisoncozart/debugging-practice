$(document).ready(function() {
  $("button#darkLight").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    //$(".dark-background").toggle();
  });

  $("p").click(function(){
    $(".text-box").toggle();
    $(".text-noBox").toggle();
  });
});