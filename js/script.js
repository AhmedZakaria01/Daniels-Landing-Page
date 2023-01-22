$(document).ready(function(){
  $(".load .spinner").fadeOut(1500, ()=> {
    $(".load").fadeOut(400, ()=> {
        $("body").css("overflow","auto");
        $(".load").remove()
    })
})
// #
  $("#menuBtn i ").click(()=> {
    $(".sideBarMain").animate($(".sideBarMain").toggleClass("open"))
  })
// #
   $(".owl-carousel").owlCarousel({
    items : 3,
    dots: true,
   });
// #
     $(".skitter-large").skitter({
      responsive: true,
      interval: 2000,
      show_randomly: true
     });
// #
   let skitterOffset = $(".skitter").offset().top;
   $(window).scroll(function () {
    if ($(window).scrollTop() > skitterOffset -200 ) {
      $('.navbar').css('background','rgba(0,0,0,9)');
      $(".navbar").animate( {paddingTop:-50,paddingBottom:-50},1300 )
    }else {
      $('.navbar').css('background','transparent');
    }
  });
 });
