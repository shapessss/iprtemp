$('.info-link').on('click', function(){
  $(".content-right, body").toggleClass("overlay-open")
  return false
})

$('.schedule').on('click', function(){
  $(".schedule-menu").css("visibility", "visible")
  $(".schedule-menu, body").toggleClass("overlay-open")
  return false
})

$('.schedule-close a').on('click', function(){
  $(".schedule-menu, body").toggleClass("overlay-open")
  return false
})
