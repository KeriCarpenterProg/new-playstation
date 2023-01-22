$(document).ready(function () {
  $(".multiple-pictures").slick({
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 3,
  });
});

$("#MIcarousel").carousel({
  interval: 4000,
  hover: "pause",
});

// $("#MIcarousel .carousel-item").each(function () {
//   let next = $(this).next();
//   console.log(next.length);
//   if (!next.length) {
//     next = $(this).siblings(":first");
//   }
//   next.children(":first-child").clone().appendTo($(this));

//   for (let i = 0; i < 2; i++) {
//     next = next.next();
//     if (!next.length) {
//       next = $(this).siblings(":first");
//     }
//     next.children(":first-child").clone().appendTo($(this));
//   }
// });
