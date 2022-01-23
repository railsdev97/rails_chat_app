// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

Rails.start()
Turbolinks.start()
ActiveStorage.start()


function scroll_bottom() {
  if ($('#msg-container').length > 0) {
    $('#msg-container').scrollTop($('#msg-container')[0].scrollHeight);
  }
}

// function submit_message() {
//   $('#message_body').on('keydown', function(event) {
//     if (event.key === "Enter") {
//       $('button')[-1].click();
//       console.log('ok');
//       event.target.value = "";
//     };
//   });
  // $('button').on('click', function() {
  //     $('form').trigger('submit');
  //     console.log('ok');
  //     $('#message_body').val("");
  // });
// }

$(document).on('turbolinks:load', function() {
  console.log('reloaded');
  // submit_message();
  scroll_bottom();
})