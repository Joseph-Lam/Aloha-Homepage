/*!
 * Flickity PACKAGED v2.0.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2016 Metafizzy
 */


$(document).ready(function(){

$(function(){
// smooth scroll function

$('.smoothScroll').click(function() {
   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     if (target.length) {
       $('html,body').animate({
         scrollTop: target.offset().top
       }, 1000); // The number here represents the speed of the scroll in milliseconds
       return false;
     }
   }
 });
});
//alert function


$('#subscribe').submit(function(event){
   event.preventDefault();
   var input = $('.email-input')

   if(input.val().length>0){
     alert('Thanks for subscribing!');

   } else{
     alert('Please enter a valid email address.');
   }
 });

});
