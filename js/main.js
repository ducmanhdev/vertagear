jQuery(document).ready(function($){
    new WOW().init();
    function stickySide(idString, closest, offset){
        if(!$(idString).length) return;
        if(!$(closest).length)  return;
        if(!$(offset))   offset = 0;
        let winTop = $(window).scrollTop();
        let mainHeight = $(closest).height();
        let mainHeightOff = $(closest).offset().top;
        if(winTop + offset >= mainHeightOff &&  winTop + offset + $(idString).height() <= mainHeightOff + mainHeight){
            $(idString).css({
                position : 'relative',
                top : offset+winTop-mainHeightOff+'px'
            });
        } else {
        if(winTop + offset < mainHeightOff){
            $(idString).attr('style','');
        }
            if( winTop + offset + $(idString).height() > mainHeightOff + mainHeight){
                $(idString).css({
                    top: mainHeight - $(idString).height() +'px'
                });
            }
        }
    }

    $('.tab-wrap').each(function() {
        let $tabWrap, $tabID;
		$tabWrap = $(this);
		$tabID = $tabWrap.find('.tab-link.current').attr('data-tab');
        $tabWrap.find($tabID).fadeIn().siblings().hide();
        $($tabWrap).on('click', '.tab-link', function(e){
            e.preventDefault();
			$tabID = $(this).attr('data-tab');
			$(this).addClass('current').siblings().removeClass('current');
            $tabWrap.find($tabID).stop().fadeIn().siblings().stop().hide();
            if($($tabID).find('.main-slider').length){
                $($tabID).find('.main-slider').slick('setPosition');
            }
        });
    });

    $('#main-menu-btn').on('click', function(){
        $('#main-menu-wrap').toggleClass('active');
        // $('body').css('overflow', 'hidden')
    });
    $('#main-menu-close-bn').on('click', function(){
        $('#main-menu-wrap').removeClass('active');
        // $('body').css('overflow', '')
    });

    $('#show-hd-cart-btn').on('click', function(e){
        e.preventDefault();
        $('#hd-cart-wrap').toggleClass('active');
    });
    $('#hd-cart-close-btn, #hd-cart-overlay').on('click', function(){
        $('#hd-cart-wrap').removeClass('active');
    });

    if ($('.scroll-top').length) {
        $(this).scrollTop() > 100 ? $('.scroll-top').addClass('show') : $('.scroll-top').removeClass('show');
		$(window).scroll(function() {
			$(this).scrollTop() > 100 ? $('.scroll-top').addClass('show') : $('.scroll-top').removeClass('show');
		});
    };
    
    $('.scroll-top').on('click', function(){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    
    $('.open-popup-btn').magnificPopup({
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = "mfp-zoom-in";
            },
        },
        midClick: true
    });

    $('.open-video-btn').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-zoom-in',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
    });

    // $('.gallery-item').on('click', function(e) {
    //     e.preventDefault();
    //     let $thumb = $(this).find('.mona-gallery-dys').attr('data-thumb');
    //     $thumb = $.parseJSON($thumb);
    //     if ($thumb) {
    //         $(this).lightGallery({
    //             share: false,
    //             actualSize: false,
    //             download: false,
    //             autoplayControls: false,
    //             dynamic: true,
    //             dynamicEl: $thumb,
    //             thumbnail: true,
    //             animateThumb: true,
    //             showThumbByDefault: true
    //         });
    //     }
    // });
    // <div class="mona-gallery-dys" data-thumb='[{"src":"images/product-3.png","thumb":"images/product-3.png"},
    //     {"src":"images/product-3.png","thumb":"images/product-3.png"},
    //     {"src":"images/product-3.png","thumb":"images/product-3.png"},
    //     {"src":"images/product-3.png","thumb":"images/product-3.png"}]'>
    // </div>

    $('.banner-slider.is-slider').each(function(){
        let $banner = $(this);
        $banner.slick({
            dots: $banner.find('.slide-item').length > 1,
            arrows: true,
            prevArrow: '<span class="main-slider-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            nextArrow: '<span class="main-slider-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            pauseOnFocus: false,
            speed: 1000,
            variableWidth: true,
        });
    })

    $('.brand-news-slider.is-slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<span class="main-slider-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="main-slider-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnFocus: false,
        speed: 1000,
        variableWidth: true,
    });

    $('.custommer-reviews-slider.is-slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<span class="main-slider-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="main-slider-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnFocus: false,
        speed: 1000,
        variableWidth: true,
    });

    $('.pd-slider.is-slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<span class="main-slider-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="main-slider-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnFocus: false,
        speed: 1000,
        variableWidth: true,
    });

    $('#faze-clan-gallery-slider.is-slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<span class="main-slider-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="main-slider-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnFocus: false,
        speed: 1000,
        variableWidth: true,
    });

    $('.faqs-item.active').find('.faqs-content').show();
    $('.faqs-title').on('click', function(){
        $(this).closest('.faqs-item').toggleClass('active');
        $(this).next('.faqs-content').stop().slideToggle();
    });

    if($('#showroom-city select.f-control').length){
        let $this = $(this);
        let $tabId = $this.find('option:selected').attr('data-tab');
        $($tabId).show().siblings().hide();
        $this.on('change', function(){
            $tabId = $this.find('option:selected').attr('data-tab');
            $($tabId).fadeIn().siblings().hide();
        });
    };
    
    $('#showroom-district select.f-control').each(function(){
        let $this = $(this);
        let $tabId = $this.find('option:selected').attr('data-tab');
        $($tabId).show().siblings().hide();
        $this.on('change', function(){
            $tabId = $this.find('option:selected').attr('data-tab');
            $($tabId).fadeIn().siblings().hide();
        });
    });

    $('.showroom-list > li > a').on('click',function(e){
        e.preventDefault();
        $(this).closest('li').addClass('active').siblings().removeClass('active');
        let $mapSrc = $(this).attr('href');
        $('#showroom-map').addClass('showing');
        $('#showroom-map > iframe').attr('src', $mapSrc).load(function() {
            $('#showroom-map').removeClass('showing');
        });
    });

    $('#social-pic-nav').lightGallery({
        share: false,
        actualSize: false,
        download: false,
        autoplayControls: false,
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: true
    });
    $('#faze-clan-gallery-slider').lightGallery({
        selector: '.box-img',
        share: false,
        actualSize: false,
        download: false,
        autoplayControls: false,
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: true
    });

    if($('#show-off-pd-imgs').length){
        let $this = $('#show-off-pd-imgs');
        let $limit = 6;
        if($this.find('li').length > $limit){
            $this.find(`li:eq(${$limit - 1}) > div`).addClass('blur').append(`
                <div class="showmore-overlay">
                    <span class="counter">VIEW IMAGE</span>
                </div>
            `);
            $this.find(`li:gt(${$limit - 1})`).hide();
        }
        $this.lightGallery({
            share: false,
            actualSize: false,
            download: false,
            autoplayControls: false,
            thumbnail: true,
            animateThumb: true,
            showThumbByDefault: true
        });
    }
    
    document.querySelectorAll('.cate-color-picker').forEach((element, index) => {
        let cateColors = element.querySelectorAll('.cate-color-picker-nav > li');
        let cateCurrentColor = element.querySelector('.cate-color-picker-current');
        for(let cateColor of cateColors){
            if(cateColor.classList.contains('active')){
                cateCurrentColor.textContent = cateColor.getAttribute('data-color');
            }
            cateColor.addEventListener('click', e => {
                e.preventDefault();
                element.querySelector('.cate-color-picker-nav > li.active').classList.remove('active');
                cateColor.classList.add('active');
                cateCurrentColor.textContent = cateColor.getAttribute('data-color');
            });
        }
    });

    $('.cate-item').each(function(){
        let $cateItem = $(this);
        let $slider = $cateItem.find('.pd-detail-slider');
        let $sliderNav = $cateItem.find('.pd-detail-slider-nav');
        if($slider.length && $sliderNav.length){
            $slider.slick({
                dots: false,
                arrows: false,
                prevArrow: '<span class="main-slider-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                nextArrow: '<span class="main-slider-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
                infinite: false,
                autoplay: true,
                autoplaySpeed: 6000,
                pauseOnFocus: false,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: $sliderNav
            });
            $sliderNav.slick({
                dots: false,
                arrows: true,
                prevArrow: '<span class="main-slider-arrow prev-arrow"><i class="fa fa-angle-up" aria-hidden="true"></i></span>',
                nextArrow: '<span class="main-slider-arrow next-arrow"><i class="fa fa-angle-down" aria-hidden="true"></i></span>',
                infinite: false,
                autoplay: true,
                autoplaySpeed: 6000,
                pauseOnFocus: false,
                speed: 1000,
                slidesToShow: 5,
                slidesToScroll: 5,
                asNavFor: $slider,
                focusOnSelect: true,
                vertical: true,
                verticalSwiping: true,
                responsive: [
                    {
                        breakpoint: 501,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            vertical: false,
                            verticalSwiping: false,
                            arrows: false,
                        }
                    },
                ]
            });
            if($cateItem.find('.cate-color-picker-nav > li.active').length){
                $slider.slick('slickFilter', `.${$cateItem.find('.cate-color-picker-nav > li.active').attr('data-filter')}`);
                $sliderNav.slick('slickFilter', `.${$cateItem.find('.cate-color-picker-nav > li.active').attr('data-filter')}`);
            }
            $cateItem.find('.cate-color-picker-nav > li').on('click', function(){
                $slider.slick('slickUnfilter');
                $sliderNav.slick('slickUnfilter');
                $slider.slick('slickFilter', `.${$(this).attr('data-filter')}`);
                $sliderNav.slick('slickFilter', `.${$(this).attr('data-filter')}`);
            });
        }
        else if($slider.length){
            $slider.slick({
                dots: false,
                arrows: false,
                prevArrow: '<span class="main-slide-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                nextArrow: '<span class="main-slide-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
                infinite: false,
                autoplay: false,
                autoplaySpeed: 6000,
                pauseOnFocus: false,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                swipe: false,
            });
            if($cateItem.find('.cate-color-picker-nav > li.active').length){
                $slider.slick('slickFilter', `.${$cateItem.find('.cate-color-picker-nav > li.active').attr('data-filter')}`);
            }
            $cateItem.find('.cate-color-picker-nav > li').on('click', function(){
                $slider.slick('slickUnfilter');
                $slider.slick('slickFilter', `.${$(this).attr('data-filter')}`);
            });
        }
    });

    if($('.rgb-led-top-kit-slider').length && $('.rgb-led-top-kit-slider-nav').length){
        $('.rgb-led-top-kit-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<span class="main-slider-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            nextArrow: '<span class="main-slider-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            infinite: false,
            autoplay: true,
            autoplaySpeed: 6000,
            pauseOnFocus: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: $('.rgb-led-top-kit-slider-nav')
        });
        $('.rgb-led-top-kit-slider-nav').slick({
            dots: false,
            arrows: false,
            prevArrow: '<span class="main-slider-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            nextArrow: '<span class="main-slider-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            infinite: false,
            autoplay: true,
            autoplaySpeed: 6000,
            pauseOnFocus: false,
            speed: 1000,
            slidesToShow: 8,
            slidesToScroll: 8,
            asNavFor: $('.rgb-led-top-kit-slider'),
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 501,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
            ]
        });
    }

    $('.reviews-collapse-title').on('click', function(){
        $(this).toggleClass('active');
        $(this).siblings('.reviews-collapse-content').stop().slideToggle();
    })

    $('.comment-like-reply .reply').on('click', function(e){
        e.preventDefault();
        let $wrapper = $(this).closest('.comment-like-reply');
        if($wrapper.find('#form-for-reply').length){
            $wrapper.find('#form-for-reply').stop().toggle();
        }
        else{
            $('#form-for-reply .f-control').val('');
            $('#form-for-reply').appendTo($wrapper).show();
        }
    });

    if(document.getElementById('register-your-product-popup')){
        let popup = document.getElementById('register-your-product-popup');
        setTimeout(() => {
            $.magnificPopup.open({
                items: {
                  src: popup,
                },
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function() {
                        this.st.mainClass = "mfp-zoom-in";
                    },
                },
                midClick: true
            });
        }, 1000);
    }

    document.querySelectorAll('.js-close-popup').forEach((element) => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

    document.querySelectorAll('.quality-picker').forEach(function(element, index){
        let input, inputMax, inputMin, inputStep, minusBtn, plusBtn;
        input = element.querySelector('input');
        inputMax = input.getAttribute('max');
        inputMin = input.getAttribute('min');
        inputStep = input.getAttribute('step') ? parseInt(input.getAttribute('step')) : 1;
        minusBtn = element.querySelector('.minus');
        plusBtn = element.querySelector('.plus');
        
        if(inputMax && (parseInt(input.value) > inputMax)) input.value = inputMax;
        if(inputMin && (parseInt(input.value) < inputMin)) input.value = inputMin;
        
        input.addEventListener('focusout', () => {
            if(inputMax && (parseInt(input.value) > inputMax)) input.value = inputMax;
            if(inputMin && (parseInt(input.value) < inputMin)) input.value = inputMin;
        });
        minusBtn.addEventListener('click', (e) => {
            e.preventDefault();
            input.value = Math.max(parseInt(input.value) - inputStep, inputMin ? parseInt(inputMin) : 1);
            input.dispatchEvent(new Event('change'));
        });
        plusBtn.addEventListener('click', (e) => {
            e.preventDefault();
            input.value = inputMax ? Math.min(parseInt(input.value) + inputStep, parseInt(inputMax)) : parseInt(input.value) + inputStep;
        });
    });

    {
        $('.red-alert').each(function(){
            let sliderWrap = $(this);
            let slider = sliderWrap.find('.slider');
            let sliderNav = sliderWrap.find('.slider-nav-thumbnails');
            slider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                dots: true,
                asNavFor: sliderNav,
            });
            
            sliderNav.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: slider,
                dots: false,
                focusOnSelect: true,
                vertical: true,
            });
            // Remove active class from all thumbnail slides
            sliderNav.find('.slick-slide').removeClass("slick-active");
            // Set active class to first thumbnail slides
            sliderNav.find('.slick-slide').eq(0).addClass("slick-active");

            // On before slide change match active thumbnail to current slide
            slider.on("beforeChange", function ( event, slick, currentSlide, nextSlide) {
                let mySlideNumber = nextSlide;
                sliderNav.find('.slick-slide').removeClass("slick-active");
                sliderNav.find('.slick-slide').eq(mySlideNumber).addClass("slick-active");
            });

            //click dots
            let node = sliderWrap.find('.node');
            node.on("click", function () {
                let target = $(this).attr("data-target");
                sliderWrap.find("." + target).trigger("click");
            });
        });

        //  $(".red-alert .buy-now select").change(function(){
        //       var element = $(this).find('option:selected');
        //       var producturl = element.attr("product-url");
        //       var productmain = element.attr("product-main");
        //       var datagal1 = element.attr("data-gal1");
        //       var datagal2 = element.attr("data-gal2");
        //       var datagal3 = element.attr("data-gal3");
        //       var datagal4 = element.attr("data-gal4");
        //       var datagal5 = element.attr("data-gal5");
        //       var datagal6 = element.attr("data-gal6");
        //       var datagal7 = element.attr("data-gal7");
        //       var datagal8 = element.attr("data-gal8");

        //        $('.red-alert .data-gal1').attr('src',datagal1);
        //        $('.red-alert .data-gal2').attr('src',datagal2);
        //        $('.red-alert .data-gal3').attr('src',datagal3);
        //        $('.red-alert .data-gal4').attr('src',datagal4);
        //        $('.red-alert .data-gal5').attr('src',datagal5);
        //        $('.red-alert .data-gal6').attr('src',datagal6);
        //        $('.red-alert .data-gal7').attr('src',datagal7);
        //        $('.red-alert .data-gal8').attr('src',datagal8);
        //        $('.red-alert #red-alert-product-main').attr('src',productmain);

        //        $('.red-alert .buy-now-link a').attr('href',producturl);
        //        $('.red-alert .buy-now-bottom a').attr('href',producturl);
        //   });
    }
    $('#show-result-btn').on('click', function(e){
        e.preventDefault()
        let $offset = $('#results-pd-sec').offset().top;
        if($('.header').length) $offset -= $('.header').outerHeight();
        if($('#wpadminbar').length) $offset -= $('#wpadminbar').outerHeight();
        $('html, body').animate({ scrollTop: $offset }, 'slow');
    })
    

    $(window).on('load', function(){
        if($('.header').length){
            let $bar, $barHeight, $header, $headerOffet, $headerHeight, $main;
            $header = $('.header')
            $headerOffet = $header.offset().top;
            $headerHeight = $header.outerHeight();
            $main = $('.main');
            // if ($('.chair-selection-tool-bar').length){
            //     $bar = $('.chair-selection-tool-bar');
            //     $barHeight = $('.chair-selection-tool-bar').outerHeight();
            // }
            $(window).on('scroll', function(){
                if($(window).scrollTop() > $headerOffet){
                    $header.addClass('fixed');
                    // if($bar){
                    //     $bar.addClass('fixed').css('top', $headerHeight);
                    //     $main.css('margin-top', $headerHeight + $barHeight);
                    // }
                    $main.css('margin-top', $headerHeight);
                }
                else{
                    $header.removeClass('fixed')
                    // if($bar){
                    //     $bar.removeClass('fixed').css('top', '');
                    // }
                    $main.css('margin-top', '');
                }
            });
        }
    });
});