// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// $(function(){
    
// })

$(document).ready(function () {
  //your code here
  $("#add_form").submit(function(e) {
        alert('being clicked');
        console.log("d");
        e.preventDefault();
    });
});

// (function( $ ) {
//     'use strict';
 
//     $(function() {
//         alert( 'JavaScript Loaded!' );
//     });
 
// })( jQuery );

// $(document).ready(function(){
//   $(".form_submit").click(function() {
//     var apiid = $('#apiid').val();
//     var apikey = $('#apikey').val();
//     var email = $('#email').val();

//     $.ajax(path_to_api_action, {
//       data: { apiid: apiid, apikey: apikey, email: email }
//       // Add other options
//     })
//   });  
// });