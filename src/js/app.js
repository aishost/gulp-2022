import * as flsFunctions from './modules/functions.js';
import './modules/jquery.js';
import './modules/sky.js';
import './modules/jquery.animateNumber.min.js';
import './modules/noframework.waypoints.min.js';
import '/node_modules/owl.carousel/dist/owl.carousel.min.js';
import './modules/jquerymodal.js'

flsFunctions.isWebp()

import Swiper, { Navigation, Pagination } from 'swiper'

const swiper = new Swiper()
var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ')
var waypoint = new Waypoint({
    element: document.getElementById('block2'),
    handler: function() {
    console.log('test')
        $('#lines').animateNumber(
            {
            number: 2000000,
            numberStep: comma_separator_number_step
            },
            {
                duration: 1500
              }
        );
        $('#lines2').animateNumber(
            {
            number: 9360000,
            numberStep: comma_separator_number_step
            },
            {
                duration: 1500
              }
        );
        $('#lines3').animateNumber(
            {
            number: 1240,
            numberStep: comma_separator_number_step
            },
            {
                duration: 1500
              }
        );
        
    },
  });


  $('.owl-sl1').owlCarousel({
    loop:true,
    margin:0,
    nav: true,
    autoplay: true,
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