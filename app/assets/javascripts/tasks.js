// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function ready(){
  console.log('document is ready');
  console.log(new Date());
  // $('#task_name').focus();
}

// $(ready);
// $(document).on('turbolinks:load', ready);

// $(function() {
//   console.log('ready');
//
// // });
// $(document).on('turbolinks:load', function() {
//   $('#task_name').focus();
//
//   $('.modal-footer .btn-primary').click(function() {
//     console.log('save the changes!');
//   });
// });

$(document).on('turbolinks:load', function() {
  $('#task_name').focus();

  $('.modal-footer .btn-primary').click(function() {
    $('.edit_task').submit();
  });
});
