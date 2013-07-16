$(document).ready(function() {
  $('#grandma').hide();
  $('#say-it').submit(function(event) {
    event.preventDefault();
    var data = $(this).serialize();
    $.post('/grandma', data, function(response){
      $('#grandma').show();
      $("#grandma_says").replaceWith($(response).find("#grandma_says"));
    })
  })
});
