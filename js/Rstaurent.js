$(function () {
	'use strict'

$(window).on('load',function () {
		$(".spinner").fadeOut(2000);
		$(".loading").delay(2000).fadeOut("slow");
});
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween:40,
      centerSlider:true,
      grabCursor:true,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

	$('.header').height($(window).height());
	$(window).resize(function(){
		$('.header').height($(window).height());
	});
	$('.header .arrow i').click(function () {
		$('html,body').animate({
			scrollTop:$('.specail').offset().top
		},1000);
	});
	//to menu food
	$('.to-menu').click(function () {
		$('html,body').animate({
			scrollTop:$('.menu-food').offset().top
		},1000);
	});

	//to about-us
	$('.to-about').click(function () {
		$('html,body').animate({
			scrollTop:$('.about-us').offset().top
		},1000);
	});
	//to our team
	$('.ReadUs').click(function(){
		$('html,body').animate({
			scrollTop:$('.our-team').offset().top
		},1000);
	});

	//contact us
	$('.contact-us').click(function(){
		$('html,body').animate({
			scrollTop:$('.contact').offset().top
		},1000);
	});

	//show speial preze
	$('.dish .show1').click(function(){
		$('.dish .prize1').fadeIn(2000);
		$('.dish .show1').css('display','none');
	});
	$('.dish .show2').click(function(){
		$('.dish .prize2').fadeIn(2000);
		$('.dish .show2').css('display','none');
	});
	$('.dish .show3').click(function(){
		$('.dish .prize3').fadeIn(2000);
		$('.dish .show3').css('display','none');
	});
		// to sweet 
	$('.sweet').click(function(){
		$('.menu3').fadeIn(1500);
		$('.sweet').css('display','none');
	});
	$('.Read').click(function(){
		$('.Read').css('display','none');
		});

	// About us
	 $('.myTab .one').click(function () {
    	$('.tab-tow').css('display','none');
    	$('.tab-one').css('display','block');
    });
	  $('.myTab .tow').click(function () {
	  	$('.tab-one').css('display','none');
    	$('.tab-tow').css('display','block');

    });
	  	// to droup dom to section
	$('.navHide ul li a').click(function() {
		$('html , body').animate({
			scrollTop:$('#'+ $(this).data('value')).offset().top - 90
		},1200);
	});

	//NiceScroll
	$('html').niceScroll({
		cursorcolor:'#fb9700',
		cursorwidth:6,
		cursorborderradius:0,
		cursorborder:'1px solid #fb9700',
	});
	//ScrollUP
	  $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
	 $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });


var ScrollUp=$('#scroll-top');
	$(window).scroll(function(){
		console.log($(this).scrollTop());
		// if ($(this).scrollTop()>=700) {
		// 	ScrollTop.show();
		// }
	 if ($(this).scrollTop() > 500) {
		 $('#scroll-top').fadeIn('slow');
		
        } else {
            $('#scroll-top').fadeOut('slow');
        }
        $('#scroll-top').click(function(){
        	$('html,body').animate({scrollTop:0},800);
        });
	});
	 //mixitup
console.log($(this).height());
	var mixer = mixitup('.containers');
	var mixer = mixitup(containerEl);
	var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
   			 }
	});
	//vvm

		$('#myfood').magnificPopup({
		delegate:'a',
		type:'image',
		gallery:{
			enabled:true
		}
	});
		
		
	// magnificPopup
	$('#menu-food').magnificPopup({
		delegate:'a',
		type:'image',
		gallery:{
			enabled:true
		}
	});
	

  $.localScroll();
});
document.getElementById('reseve_table').onclick=function () {
		document.getElementById('myReseve').style.display=" block";
	}
