ymaps.ready(function() {
 var myMap = new ymaps.Map('map', {
   center: [59.938587, 30.322954],
   zoom: 18
  }, {
   searchControlProvider: 'yandex#search'
  }),
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
   '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
   hintContent: 'Собственный значок метки',
  }, {
   iconLayout: 'default#image',
   // Своё изображение иконки метки.
   iconImageHref: 'img/pin.png',
   // Размеры метки.
   iconImageSize: [124, 106],
   // Смещение левого верхнего угла иконки относительно
   // её "ножки" (точки привязки).
   iconImageOffset: [-53, -113]
  });
 myMap.geoObjects
  .add(myPlacemark);
 myMap.setCenter([59.938617, 30.322985], 18);
  width=document.body.clientWidth;
  if (width>=1440){
      myMap.setCenter([59.938707, 30.319369], 17);
      }
});
