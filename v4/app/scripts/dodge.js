"use strict";

$(document).ready(function() {

   $(function () {
     $('[data-toggle="tooltip"]').tooltip()
   })

   $('.float-wave').click(function() {
      $(".floating-container").append('<div class="float-obj"></div>')
      $(".float-obj")
         .velocity('fadeOut', { duration: 800 })
         .velocity({
            borderRadius: "100%",
            width: "50px",
            height: "50px",
            marginTop: "0",
            marginLeft: "0",
            backgroundColor: "#3d81a9",
            color: "#fff",
            borderColor: "#415d6e"
         }, {
            duration: 350,
            easing: "easeInQuad"
         })
         .velocity("fadeIn", {duraction: 400})

         .velocity({
            marginTop: "-10%",
            marginLeft: "80%"
         }, {
            duration: 1800,
            easing: [ .95, 0, .21, .98]
         });
   });

   $(".float-obj").hover(function() {
      
   })

});
