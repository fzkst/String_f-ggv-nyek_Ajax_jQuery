$(document).ready(function () {

  $('#nagybetus').on('click', function () {
    let szoveg = $('#szoveg').val().toUpperCase();  
    $('p').text(szoveg);
  });

  $('#visszafele').on('click', function () {
    let szoveg = $('#szoveg').val().split("").reverse().join(""); 
    $('p').text(szoveg);
  });

  $('#szavak').on('click', function(){    
    $('#bekezdes').html("<ul id='uList'></ul>");
    let lista = $('#szoveg').val().split(" ");    
    $.each(lista, function(index, value) {
      $('#uList').append($('<li></li>').html(value));
    });  
  });

  $('#hossza').on('click', function(){
    $('p').text($('#szoveg').val().length);   
  });
  
  $('#szokozNelkul').on('click', function(){
    $('p').text($('#szoveg').val().replace(/\s/g, '').length);   
  });

});



