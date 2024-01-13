console.log("your index.js file is loaded correctly");

$("resumeButton").on("click", function(){
    $(".resumeButton").toggleClass("active");
    if ($(".resumeButton").hasClass("active")) {
      $(".resumeBackground").css("height", "100vh");
      $("#resumeImage").css("opacity","1");
      $(".button").removeClass("fa-search").addClass("fa-times");
    }
    else {
      $(".resumeBackground").css('height', "0vh");
      $("#resumeImage").css("opacity","0");
      $(".button").removeClass("fa-times").addClass("fa-search");
    }
  });
  