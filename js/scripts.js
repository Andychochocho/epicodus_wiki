$(document).ready(function() {
  $("button#green").click(function() {
    if ($("body").hasClass("green-background")){
      $("body").removeClass("green-background");
    } else {
          $("body").addClass("green-background");
    }

  });
});
