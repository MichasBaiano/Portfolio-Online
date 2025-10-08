$('#celular').mask('(00) 00000-0000').on('blur', function(){
  var phone = $(this).val().replace(/\D/g, '');
  if(phone.length === 10) {
    $(this).mask('(00) 0000-0000');
  } else {
    $(this).mask('(00) 00000-0000');
  }
});