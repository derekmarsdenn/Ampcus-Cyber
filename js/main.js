$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
});

$(window).scroll(function() {
    $('img').toggleClass('scrolled', $(this).scrollTop() > 200);
});

let date = document.getElementById("date");
date.innerText = new Date().getFullYear();

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })