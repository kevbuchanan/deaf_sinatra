$(document).ready(function() {
  $('#say-it').submit(function(event) {
    event.preventDefault();
    var data = $(this).serialize();
    $.post('/grandma', data, function(response){
      $("#grandma_says").replaceWith($(response).find("#grandma_says"));
    })
  })
});
