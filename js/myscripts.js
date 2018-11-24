// $(".open-button").on("click", function() {
//     $(this).closest('.container').find('.collapse').collapse('show');
//   });
  
//   $(".close-button").on("click", function() {
//     $(this).closest('.container').find('.collapse').collapse('hide');
//   });

  $(document).ready(function () {
    $(".open-button").on("click", function() {
      $(this).closest('.container').find('.collapse').collapse('show');
    });
    
    $(".close-button").on("click", function() {
      $(this).closest('.container').find('.collapse').collapse('hide');
    });
  });