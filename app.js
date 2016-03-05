// User can click Add to add
$('#todos button').click(function(){
  var $inputVal = $('input').val();
  $('#todos ul').append('<li>' + $inputVal + '</li>')
  $('#todos input').val('');
});

// User can press enter to add
$('#todos input').keypress(function(e){
  if(e.which == 13){
    // Use click method
    $('#todos button').click();
    return false;
  }
});

$('ul').on('click', 'li', function(){
  $(this).toggleClass('strike')
});

$('#todos input').on('keypress', function(){
  var $inputVal = $('input').val();
  if($inputVal.length < 3){
    $('#val-three-chars').css('visibility', 'visible');
  } else {
    $('#val-three-chars').css('visibility', 'hidden');
  }
});
