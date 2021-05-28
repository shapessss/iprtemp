var audio = new Audio("https://c11.radioboss.fm/stream/270");

$('#play-pause-button').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-stop');
     audio.play();
   }
  else
   {
     $(this).removeClass('fa-stop');
     $(this).addClass('fa-play');
     audio.pause();
   }
});

audio.onended = function() {
     $("#play-pause-button").removeClass('fa-stop');
     $("#play-pause-button").addClass('fa-play');
};