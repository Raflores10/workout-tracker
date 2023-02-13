$('.submit').click(function(e) {
    e.preventDefault();
    var weight, reps = 0;
    var weight = parseFloat($('input[name="weight"]').val());
    var reps = parseFloat($('input[name="reps"]').val());
  
    var oneRepMax = Math.round((100 * weight) / (101.3 - (2.67123 * reps)));
  
    $('.answer').html('Your One Rep Max is: ' + oneRepMax);
  });