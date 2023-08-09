console.log ('Hello world!');

let zoomPhotos = document.querySelectorAll('.zoom_photo');

function zoomClick(photo) {
  if (!photo.classList.contains('animation_zoom')) {
    if (photo.classList.contains('gallery_photo_zoom')) {
        photo.style.transform = 'scale(1.5)';
    } else if (photo.classList.contains('home_photo_zoom')) {
        photo.style.transform = 'scale(1.1)';
    }
    photo.classList.add('animation_zoom');
  } else {
    photo.style.transform = 'scale(1)';
    photo.classList.remove('animation_zoom');
  }
}

  zoomPhotos.forEach(function (photo) {
    photo.addEventListener('click', function () {
      zoomClick(photo);
    });
  });