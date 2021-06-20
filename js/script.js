$(document).ready(function()
{
  $("#design").click(function()
  {
    $("#designtxt").toggle()
    $("#designimg").toggle()
  })

  $("#development").click(function(){
    $("#developtxt").toggle()
    $("#developimg").toggle()
  })

  $("#product").click(function(){
    $("#producttxt").toggle()
    $("#productimg").toggle()
  })

  $('[data-toggle="tooltip"]').tooltip();

  });
  $('.container footerform').keypress(function (e) {
    
  
  });