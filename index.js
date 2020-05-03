console.log("it is working")

var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
var modal = document.querySelector('.modal');

var stopVideo = function ( element ) {
  var iframe = element.querySelector( 'iframe');
  var video = element.querySelector( 'video' );
  if ( iframe !== null ) {
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
  if ( video !== null ) {
    video.pause();
  }
};

modalBtn.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
  stopVideo(modal);
});

