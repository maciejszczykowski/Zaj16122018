$(document).ready(function () {
    $("#news").load("aktualnosci.html");

    $("div.answer").css("display", "none");
    $("div.questionAnswer > h1").click(function () {
        $(this).next(".answer").slideToggle();
    });

    $('.fadein img:gt(0)').hide();
    setInterval(function () {
        $('.fadein :first-child').fadeOut()
           .next('img').fadeIn()
           .end().appendTo('.fadein');
    },
      3000);
});