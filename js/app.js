$ (document).ready(function(){
    $('.ba-members').slick(
       {
           speed: 1000,
           autoplaySpeed: 1000,
          // autoplay: true,
           arrows: true,  
        //    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left'></i></button>",
        //    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",
           slidesToShow: 3,
           slidesToScroll: 1,
           infinity: true,
           centerMode: true
       })

})