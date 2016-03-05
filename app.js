$('#todos button').click(function(){
  var $inputVal = $('input').val();
  $('#todos ul').append('<li>' + $inputVal + '</li>')
});

$('ul').on('click', 'li', function(){
  console.log('hello')
  $(this).remove();
})
