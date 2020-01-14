$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      alert("hi");
    });
    $("ul#webpage").children("li").first().click(function() {
      alert("hi");
    });
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });

  
  $("button#walrus").click(function() {
    $("ul#user").prepend("<img src='img/walrus.jpg'>");
    $("ul#webpage").prepend("<li>Walrus Time.</li>");
    $("ul#user").children("img").first().click(function() {
      alert("hi");
    });
    $("ul#webpage").children("img").first().click(function() {
      alert("hi");
    });
    $("ul#user").children("img").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("img").first().click(function() {
      $(this).remove();
    });
  }); 
});
});