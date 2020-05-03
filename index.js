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
  // When the modal is shown, we want a fixed body
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
});

modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
  stopVideo(modal);
  // When the modal is hidden, we want to remain at the top of the scroll position
  document.body.style.position = '';
  document.body.style.top = '';
  // When the modal is hidden...
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
});

