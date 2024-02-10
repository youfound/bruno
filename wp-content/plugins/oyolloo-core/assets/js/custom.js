(function($) {


	$('.menu-responsive').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span class="meanmenu-reveal"></span><span></span><span></span>',
		meanMenuClose: '<i class="fal fa-times"></i>'
	});

	/*========== Testimonial Slider Js ==========*/
	function testimonial_slider() {
		var swiper = new Swiper(".testimonial-active", {
			loop: true,
			speed: 1500,
			spaceBetween: 30,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				575: {
					slidesPerView: 1
				},
				992: {
					slidesPerView: 2
				},
				1200: {
					slidesPerView: 2
				},
			}
		});
	}

	function mobile_counter() {
		var swiper = new Swiper(".counter-active", {
			loop: true,
			speed: 1500,
			spaceBetween: 30,
			autoplay: {
				delay: 3500,
			},
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				575: {
					slidesPerView: 1
				},
				992: {
					slidesPerView: 2
				},
				1200: {
					slidesPerView: 2
				},
			}
		});

		/*==========  counterUp  ==========*/
		var counter = $('.counter');
		counter.counterUp({
			time: 2500,
			delay: 100
		});
	}

	function step_slider() {
		var swiper = new Swiper(".step-active", {
			loop: true,
			speed: 1500,
			spaceBetween: 30,
			autoplay: {
				delay: 3500,
			},
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				575: {
					slidesPerView: 1
				},
				992: {
					slidesPerView: 2
				},
				1200: {
					slidesPerView: 2
				},
			}
		});

	}

	function why_choose_slider() {
		var swiper = new Swiper(".why-active", {
			loop: true,
			speed: 1500,
			spaceBetween: 30,
			autoplay: {
				delay: 3500,
			},
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				575: {
					slidesPerView: 1
				},
				992: {
					slidesPerView: 2
				},
				1200: {
					slidesPerView: 2
				},
			}
		});

	}

	function price_slider_one() {
		var swiper = new Swiper(".price-slider-one", {
			loop: true,
			speed: 2500,
			spaceBetween: 30,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false, // Allow interaction to stop autoplay
			},
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
	
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				575: {
					slidesPerView: 1
				},
				992: {
					slidesPerView: 2
				},
				1200: {
					slidesPerView: 2
				},
			}
		});
	
		var $priceTableWrapper = $('.price-slider-one .ol-price-table-wrapper');
	
		$priceTableWrapper.on('mouseenter click', function () {
			if (swiper && swiper.autoplay) {
				if (swiper.autoplay.running) {
					swiper.autoplay.stop();
				} else {
					swiper.autoplay.start();
				}
			}
		});
	
		// Resume autoplay on mobile touchend
		$priceTableWrapper.on('touchend', function () {
			if (swiper && swiper.autoplay) {
				if (!swiper.autoplay.running) {
					swiper.autoplay.start();
				}
			}
		});
	}
	
	
	 // elementor-accordion-item Js Active Class 
	 $('.ol-asked-question .elementor-accordion-item:first').addClass('active');
	 // Handle click events on accordion items
	 $('.ol-asked-question .elementor-accordion-item').on('click', function() {
		 // Remove active class from all items
		 $('.ol-asked-question .elementor-accordion-item').removeClass('active');
		 
		 // Add active class to the clicked item
		 $(this).addClass('active');
	 });	


	 $(document).ready(function() {
		$('body').addClass('dark-mode');
		$('.fa-moon').addClass('active');
		$('.checkbox-label i').on('click', function() {
			// Remove active class from all i tags
			$('.checkbox-label i').removeClass('active active');
	
			// Determine which icon was clicked
			if ($(this).hasClass('fa-moon')) {
				// Add moon-active class if moon is clicked
				$(this).addClass('active');
			} else if ($(this).hasClass('fa-sun')) {
				// Add sun-active class if sun is clicked
				$(this).addClass('active');
			}
		});
	});
	


// JavaScript to handle dark mode toggle
jQuery(document).ready(function($) {
    // Check localStorage for user's preferred color scheme
    const preferredColorScheme = localStorage.getItem('preferredColorScheme');

    // Set default color scheme to dark if not explicitly chosen as light
    if (!preferredColorScheme || preferredColorScheme === 'dark') {
        enableDarkMode();
    } else if (preferredColorScheme === 'light') {
        enableLightMode();
    }

    // Toggle dark mode when clicking on the toggle button
    $('#dark-mode-toggle').click(function() {
        if ($('body').hasClass('dark-mode')) {
            // Switch to light mode
            enableLightMode();
        } else {
            // Switch to dark mode
            enableDarkMode();
        }
    });

    // Update the icon state based on the initial color scheme
    updateIconState();

    function updateIconState() {
        const isChecked = $('body').hasClass('dark-mode');
	    // const isChecked = localStorage.getItem('preferredColorScheme') ;
        const icon = $('#dark-mode-toggle');
		console.log(isChecked);
        
        if (isChecked == true ) {
		icon.addClass('dark-mood');
		icon.removeClass('light-mood');
        } else {
        icon.removeClass('dark-mood');
        icon.addClass('light-mood');

        }
    }

    function enableDarkMode() {
        $('body').addClass('dark-mode');
        localStorage.setItem('preferredColorScheme', 'dark');
        updateIconState();
    }

    function enableLightMode() {
        $('body').removeClass('dark-mode');
        localStorage.setItem('preferredColorScheme', 'light');
        updateIconState();
    }
});

	$(document).ready(function() {
		const sliderEl = document.querySelector("#rangeInput");

		sliderEl.addEventListener("input", (event) => {
		const value = event.target.value;
		const min = event.target.min;
		const max = event.target.max;
		const progress = ((value - min) / (max - min)) * 100;

		sliderEl.style.background = `linear-gradient(to right, #0022D0 ${progress}%, rgba(0, 34, 208, 0.10) ${progress}%)`;
		});
	});


    /*==========  Masonary Js  ==========*/
	$(document).ready(function() {
		// Filter items on button click
		$('.filter-button-group').on('click', 'li', function() {
			$('.filter-button-group li').removeClass('active');
			$(this).addClass('active');
		});
	});


	if ($('.preloader').length) {
		$('.preloader').delay(300).fadeOut(900);
	}


	$(window).on("elementor/frontend/init", function() {

		elementorFrontend.hooks.addAction("frontend/element_ready/el-test.default",testimonial_slider );
		elementorFrontend.hooks.addAction("frontend/element_ready/el-counter-mobile.default",mobile_counter );
		elementorFrontend.hooks.addAction("frontend/element_ready/el-step-mobile.default",step_slider );
		elementorFrontend.hooks.addAction("frontend/element_ready/el-why-choose-mobile.default",why_choose_slider );
		elementorFrontend.hooks.addAction("frontend/element_ready/el-price-slider-one.default",price_slider_one );
	
	  });


})(jQuery);

