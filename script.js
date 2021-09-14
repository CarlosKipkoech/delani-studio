"use strict";

$(document).ready(function () {
  $(".nav-texta").hide();
  $(".todelan").hide();
  $(".amazing").hide();

  $(window).on("load", function () {
    $(".nav-texta").delay(10).fadeIn(1000);
    $(".todelan").delay(1000).fadeIn(1000);

    $(".amazing").delay(3000).fadeIn(2500);
    $(".logod").delay(2000).animate({ width: "96px" }, 1000);
  });

  // $(".nav-logo img").css(function () {});
  $("body").bind("touchmove", function (e) {
    e.preventDefault();
  });
  /*WHAT WE DO*/

  $(".design").hide();
  $(".development").hide();
  $(".product").hide();
  var img1 = $(".1mg1");
  var img2 = $(".1mg2");
  var img3 = $(".1mg3");
  var design = $(".design");
  var product = $(".product");
  var development = $(".development");

  $(".img1").click(function () {
    $(this).toggle();
    $(design).toggle();
  });

  $(design).click(function () {
    $(design).hide();
    $(".img1").show();
  });
  $(".img2").click(function () {
    $(this).toggle();
    $(development).toggle();
  });

  $(development).click(function () {
    $(development).hide();
    $(".img2").show();
  });
  $(".img3").click(function () {
    $(this).toggle();
    $(product).toggle();
  });

  $(product).click(function () {
    $(product).hide();
    $(".img3").show();
  });

  /*PORTFOLIO */
  $(".port-1").hover(function () {
    $(".port-name0").toggleClass("modal");
    $(".port1").toggleClass("modal");
  });
  $(".port-2").hover(function () {
    $(".port-name1").toggleClass("modal");
    $(".port2").toggleClass("modal");
  });
  $(".port-3").hover(function () {
    $(".port-name2").toggleClass("modal");
    $(".port3").toggleClass("modal");
  });
  $(".port-4").hover(function () {
    $(".port-name3").toggleClass("modal");
    $(".port4").toggleClass("modal");
  });
  $(".port-5").hover(function () {
    $(".port-name4").toggleClass("modal");
    $(".port5").toggleClass("modal");
  });
  $(".port-6").hover(function () {
    $(".port-name5").toggleClass("modal");
    $(".port6").toggleClass("modal");
  });
  $(".port-7").hover(function () {
    $(".port-name6").toggleClass("modal");
    $(".port7").toggleClass("modal");
  });
  $(".port-8").hover(function () {
    $(".port-name7").toggleClass("modal");
    $(".port8").toggleClass("modal");
  });
  $(".complete").hide();
  $(".missing").hide();

  $("#sub").click(function (e) {
    e.preventDefault();
    var userName = $("#name").val();
    if (!userName) {
      $(".missing").fadeIn(100, function () {
        $(".missing").delay(2000).fadeOut(3000);
      });
    } else {
      $(".returnmessage").text(`success! ${userName} Your message was posted`);
      $(".formas").fadeOut("fast", function () {
        $(".formas").delay(4000).fadeIn();
      });
      $(".complete").fadeIn(1500, function () {
        $(".complete").delay(2000).fadeOut(1000);
      });
    }
  });
});

// MAIL CHIMP NEWSLETTER

/*var myVar;

function myFunction() {
  myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}
 */
