ymaps.ready(init);
const geoObjects = [];
const marks = [
  {
    latitude: 59.938835,
    longitude: 30.323026,
    hintContent: '<div class="map__hint">CatEnergy</div>'
  }
]

let imageSource;

let mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (mobile) {
  imageSource = {
    src: '../img/icon/map-pin.png',
    size: [57, 53],
    offset: [-28, -53]
  }
}else {
  imageSource = {
    src: '../img/icon/map-pin-desk.png',
    size: [113, 106],
    offset: [-56, -106]
  }
};

function init(){
    // Создание карты.
    const myMap = new ymaps.Map("map", {
        center: [59.938835, 30.323026],
        zoom: 14
    });

    marks.forEach(function(mark, i){
      geoObjects.push(new ymaps.Placemark([mark.latitude, mark.longitude], {
        hintContent: mark.hintContent
      },
      {
        iconLayout: 'default#image',
        iconImageHref: imageSource.src,
        iconImageSize: imageSource.size,
        iconImageOffset: imageSource.offset
      }))
    })

    myMap.geoObjects.add(geoObjects[0])
  }
