<!-- Slick Slider Initialization and parameters -->
$(document).ready(function(){
  $('.multiple-pictures').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll:3
  });

}); 




<!-- change carousel interval -->
$('#MIcarousel').carousel({
  interval:4000,
  hover: 'pause'
});

<!-- show multiple carousel images simultaneously -->
$('#MIcarousel .carousel-item').each(function(){
  let next = $(this).next();
  console.log(next.length);
  if(!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for(let i=0;i<2;i++) {
    next=next.next();
    if(!next.length) {
      next=$(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});
