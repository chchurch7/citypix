$(document).ready(function() {
  $('#submit-btn').click(function(){
    event.preventDefault();
    var city = $('#city-type').val();
    console.log(city);

    $('#city-type').val('');
    city = city.toLowerCase().trim();
    if(city == 'new york city') {
      $('body').attr('class','nyc');
    }
    else if (city == 'san francisco') {
      $('body').attr('class','sf');
    }
    else if (city == 'austin') {
      $('body').attr('class','austin');
    }
    else if (city == 'los angelas') {
      $('body').attr('class','la');
    }
    else if (city == 'sydney') {
    $('body').attr('class','sydney');
    } else {
      $('body').css('background','white');
    }
  });
});