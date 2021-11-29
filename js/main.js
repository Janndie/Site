$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  $("#link").click(function() {
    $('html, body').animate({
      scrollTop: $("#element_target").offset().top
    }, 1000);
  });
  if (window.matchMedia("(max-width: 960px)").matches) {
    $('.rabochee').slick();
  }