ymaps.ready(init);
const geoObjects = [];
const marks = [
  {
    latitude: 59.938835,
    longitude: 30.323026,
    hintContent: '<div class="map__hint">CatEnergy</div>'
  }
]

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
        iconImageHref: '../img/icon/map-pin.png',
        iconImageSize: [57, 53],
        iconImageOffset: [-28, -53]
      }))
    })

    myMap.geoObjects.add(geoObjects[0])
  }
