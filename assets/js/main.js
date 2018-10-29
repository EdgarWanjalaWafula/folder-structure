$('.owl-services').owlCarousel({
    loop:true,
    autoplay:true, 
    loop:true, 
    margin:10,
    navSpeed:2000, 
    smartSpeed:2500, 
    nav:true,
         navText : ["<img src='assets/images/left.png'>","<img src='assets/images/right.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-services-main').owlCarousel({
    loop:true,
    autoplay:true, 
    loop:true, 
    margin:10,
    navSpeed:1000, 
    smartSpeed:1500, 
    nav:true,
         navText : ["<img src='assets/images/left.png'>","<img src='assets/images/right.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-services-desc').owlCarousel({
    loop:true,
    autoplay:true, 
    loop:true, 
    margin:10,
    navSpeed:1000, 
    smartSpeed:1500, 
    nav:true,
        navText : ["<img src='assets/images/left.png'>","<img src='assets/images/right.png'>"],
    URLhashListener:true,
    autoplayHoverPause:true,
    // startPosition: 'URLHash', 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-people').owlCarousel({
    loop:true,
    autoplay:false, 
    loop:true, 
    margin:10,
    navSpeed:1000, 
    smartSpeed:1500, 
    nav:true,
    navText : ["<img src='assets/images/left.png'>","<img src='assets/images/right.png'>"],
    autoplayHoverPause:true, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

$('.owl-team').owlCarousel({
    loop:true,
    autoplay:false, 
    margin:10,
    autoplayHoverPause: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    autoplayTimeout: 5000,
    navSpeed:1000, 
    smartSpeed:1500, 
    nav:true,
        navText : ["<img src='assets/images/left.png'>","<img src='assets/images/right.png'>"],
    autoplayHoverPause:true, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

// Hover effects for cards on contact page
$(document).ready(function(){
    $('.contact-bottom .card').hover(function() {
        $(this).find('.card-img').fadeIn(1500);
        console.log("dfkhdkjhfdhfkjdhfkjdhjfkf");
    }, function() {
        $(this).find('.card-img').hide(.0100000000000000000);
        console.log("out"); 
    });

    $('.test').click(function(){
        $("#scroll-test").animate({ scrollTop: $(document).height() }, "slow"); 
    }); 
}); 

