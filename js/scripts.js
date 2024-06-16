$(document).ready(function(){

	"use strict";
	
    // CAROUSEL BANNER
    $(".carousel-sliders").owlCarousel({
		animateOut: 'fadeOut',
    	animateIn: 'flipInX',
	    loop: true,
	    autoplay: true,
        autoplayTimeout: 5000,
	    nav: true,
	    dots: false,
	    navContainer: '.banner .custom-nav',
	    items: 1,
	});

	// CAROUSEL TESTIMONIALS
	$(".carousel-testimonials").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items: 1
	});
});

window.onscroll = function() {toggleMenu()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop + navbar.offsetHeight;

function toggleMenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }
}

// Open the Modal
var modal = document.getElementById('myModal');
var img = document.getElementsByClassName('gallery-item');
var modalImg = document.getElementById("img01");

for (var i = 0; i < img.length; i++) {
  img[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.children[0].src;
  }
}

// Close the Modal and display attract message
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
  // Display attract message after a delay
  setTimeout(function() {
    document.getElementById('overlay').style.display = "block";
    document.getElementById('attractMessage').style.display = "block";
    // Hide the attract message after 3 seconds
    setTimeout(function() {
      document.getElementById('overlay').style.display = "none";
      document.getElementById('attractMessage').style.display = "none";
    }, 3000);
  }, 500);
}

/**
   * Init swiper slider with 1 slide at once in desktop view
   */
new Swiper('.slides-1', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

/**
 * Init swiper slider with 3 slides at once in desktop view
 */
new Swiper('.slides-3', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },

    1200: {
      slidesPerView: 3,
    }
  }
});