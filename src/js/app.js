// import * as flsFunctions from "./modules/functions.js"
// import { Modal } from '../js/libs/modal.js'
// import { Accordion } from '../js/libs/accordion.js'
// import * as noUiSlider from 'nouislider'
// import fslightbox from "fslightbox";
// import { animOnScroll } from "./libs/animOnScroll.js"
// import { headerFixed } from "./libs/fixed-header.js";
// import { simpleBar } from "simplebar"; => data-simplebar должен быть у обьекта
// import { select } from './libs/select.js';
import { lazyLoading } from './libs/lazy-loading.js';
import { getHeaderHeight } from './libs/header-height.js';
import { mobileCheck } from './libs/mobile-check.js';
// import Swiper from 'swiper';
// import { backgroundImageWebp } from './libs/backgroundImageWebp.js'
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
// import AOS from 'aos'

// AOS.init()

// Preloader
// window.addEventListener('load', function() {
//     let preloader = document.getElementById('preloader')
//     preloader.style.display = 'none'
//     document.body.style.overflow = 'auto'
// })
// Preloader

// flsFunctions.isWebP()
// animOnScroll()
// headerFixed();
// Accordion()
// select();
lazyLoading();
getHeaderHeight();
mobileCheck();
// backgroundImageWebp()

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const body = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  navbar.classList.toggle('navbar--active');
  body.classList.toggle('is-lock');
});

window.addEventListener("click", (event) => {
  if (event.target === navbar) {
    burger.classList.remove('burger--active');
    navbar.classList.remove('navbar--active');
    body.classList.remove('is-lock');
  }
})

const heroSlider = new Swiper('.hero', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.hero__arrow--next',
    prevEl: '.hero__arrow--prev',
    disabledClass: "hero__arrow--disabled"
  }
});


// document.querySelectorAll('a[href^="#"').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();

//     let href = this.getAttribute('href').substring(1);

//     const scrollTarget = document.getElementById(href);

//     const topOffset = document.querySelector('.header').offsetHeight;
//     // const topOffset = 0; // если не нужен отступ сверху 
//     const elementPosition = scrollTarget.getBoundingClientRect().top;
//     const offsetPosition = elementPosition - topOffset;

//     window.scrollBy({
//       top: offsetPosition,
//       behavior: 'smooth'
//     });
//   });
// });

// window.addEventListener("scroll", () => {
//   let scrollDistanse = window.scrollY;

//   document.querySelectorAll('.main').forEach((el, i) => {
//     if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistanse) {
//       document.querySelectorAll('.navbar__link').forEach((el) => {
//         if (el.classList.contains('navbar__link--active')) {
//           el.classList.remove('navbar__link--active');
//         }
//       });

//       document.querySelectorAll('nav li')[i].querySelector('a').classList.add('navbar__link--active');
//     }
//   });
// });

// const modal = new Modal({})

// Range slider
// const rangeSlider = document.getElementById('range-slider');

// if (rangeSlider) {
// 	noUiSlider.create(rangeSlider, {
//     start: [500, 999999],
// 		connect: true,
// 		step: 1,
//     range: {
// 			'min': [500],
// 			'max': [999999]
//     }
// 	});

// 	const input0 = document.getElementById('input-0');
// 	const input1 = document.getElementById('input-1');
// 	const inputs = [input0, input1];

// 	rangeSlider.noUiSlider.on('update', function(values, handle){
// 		inputs[handle].value = Math.round(values[handle]);
// 	});

// 	const setRangeSlider = (i, value) => {
// 		let arr = [null, null];
// 		arr[i] = value;

// 		console.log(arr);

// 		rangeSlider.noUiSlider.set(arr);
// 	};

// 	inputs.forEach((el, index) => {
// 		el.addEventListener('change', (e) => {
// 			console.log(index);
// 			setRangeSlider(index, e.currentTarget.value);
// 		});
// 	});
// }
// /Range slider

// =============================
// document.addEventListener('DOMContentLoaded', () => {

// 	let mySwiper = new Swiper('.slider-block', {
// 		slidesPerView: 1,
// 	})
// 	const sliderNavItems = document.querySelectorAll('.slider-nav__item');
// 	const sliderNav = document.querySelector('.slider-nav');

// 	sliderNavItems.forEach((el, index) => {
// 		el.setAttribute('data-index', index);

// 		el.addEventListener('click', (e) => {
// 			const index = parseInt(e.currentTarget.dataset.index);
// 			console.log(index)
// 			mySwiper.slideTo(index);
// 		});
// 	});
// })
// =============================

// Gallery
// Gallery

// Lazy Loading



//Lazy Loading


// disable-scroll & enable-scroll

// const fixBlocks = document.querySelectorAll('.fix-block')

// let disableScroll = function () {
//     let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
//     let pagePosition = window.scrollY
//     fixBlocks.forEach((el) => {
//         el.style.paddingRight = paddingOffset
//     })
//     body.style.paddingRight = paddingOffset
//     body.classList.add('disable-scroll')
//     body.dataset.position = pagePosition
//     body.style.top = -pagePosition + 'px'
// }

// let enableScroll = function () {
//     let pagePosition = parseInt(document.body.dataset.position, 10)
//     body.style.top = 'auto'
//     body.classList.remove('disable-scroll')
//     fixBlocks.forEach((el) => {
//         el.style.paddingRight = '0px'
//     })
//     body.style.paddingRight = '0px'
//     window.scroll({ top: pagePosition, left: 0 })
// }

// disable-scroll & enable-scroll