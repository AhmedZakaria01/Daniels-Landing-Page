$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
    items : 3,
    dots: true,
   });

   let aboutMeOffset = $(".about-me").offset().top;
  //  console.log(aboutMeOffset);
   $(window).scroll(function () {
    if ($(window).scrollTop() > aboutMeOffset -70 ) {
      $('.navbar').css('background','rgba(0,0,0,9)');
      $(".navbar").animate( {paddingRight:100,paddingLeft:100},1300 )
    }else {
      $('.navbar').css('background','transparent');
    }
  });
// ------------------
  $(".loading .spinner").fadeOut(100, ()=> {
    $(".loading").fadeOut(100, ()=> {
        $("body").css("overflow","auto")
    })
})
// ------------------


$("#sideBar i").click(()=> {
  let boxWidth = $("#box").outerWidth()
  if ($("#sideBar").css('left') === "0px") {
    boxWidth =  $("#sideBar").animate({left: -`${boxWidth}`},1000)
  }else {
    boxWidth =  $("#sideBar").animate({left: 0},1000)
  }
})

let colorSpans = $("#sideBar span");
for (let i = 0; i < colorSpans.length; i++) {
  let red =  Math.floor( Math.random() * 255 );
  let green =  Math.floor( Math.random() * 255 );
  let blue =  Math.floor( Math.random() * 255 );
  $("#sideBar span").eq(i).css("background-color", `rgb(${red}, ${green}, ${blue}) `)
}

colorSpans.click((e)=> {
  targetColor = $(e.target).css("background-color")
  $(".change").css("color", targetColor)
})










 });
























//  let aboutMeOffset = $(".about-me").offset().top;
//  console.log(aboutMeOffset);

//  $(window).scroll(function () {
//   if ($(window).scrollTop() > aboutMeOffset -70 ) {
//     $('.navbar').css('background','rgba(0,0,0,9)');
//     $(".navbar").animate( {paddingRight:100,paddingLeft:100},1300 )
//     // $(".navbar-toggler").css("color", "white")
//     // $(".navbar-toggler-icon").addClass("text-danger");

      
//   }else {
//     $('.navbar').css('background','transparent');
//   }
// });





$(document).ready(function () {
    // $(".loading .spinner").fadeOut(100, ()=> {
    //     $(".loading").fadeOut(100, ()=> {
    //         $("body").css("overflow","auto")

    //     })
    // })
});

