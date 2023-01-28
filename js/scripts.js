$(document).ready(function () {
  $(".multiple-pictures").slick({
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 3,
  });
});

$(document).ready(function () {
  $("#full-width-slider").slick({
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    variableWidth: true,
  });
});
