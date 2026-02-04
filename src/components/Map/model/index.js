export class MapModel {
  static selectors = {
    instance: "[data-js-map]",
  };

  static contacts = {
    address: "г. Челябинск <br>Карьер (каменный)!",
    phone: 7999999999,
  };
  
  static addresses = {
    to: "посёлок Шершнёвские Каменные",
  };
  
  static imageURL = "https://static.thenounproject.com/png/888711-200.png";

  constructor() {
    this.instance = document.querySelector(MapModel.selectors.instance);
    console.log(this.instance);

    if (this.instance) {
      this.#init();
    }
  }

  #init() {
    const mapInstance = this.instance;
    const center = [55.153139884401156, 61.33629697899342];

    async function init() {
      let myMap = new ymaps.Map(mapInstance, {
        center: center,
        zoom: 15,
        controls: ["routePanelControl"],
      });

      try {
        let locationData = await ymaps.geolocation.get();
        let fromAddress = locationData.geoObjects.get(0).properties.get("text");

        let control = myMap.controls.get("routePanelControl");
        control.routePanel.state.set({
          type: "masstransit",
          fromEnabled: true,
          from: fromAddress,
          toEnabled: false,
          to: MapModel.addresses.to,
        });
      } catch (error) {
        console.error(error);
        
        let control = myMap.controls.get("routePanelControl");
        control.routePanel.state.set({
          type: "masstransit",
          toEnabled: false,
          to: MapModel.addresses.to,
        });
      }

      let placemark = new ymaps.Placemark(center, {
        balloonContent: `
          <div class="map__balloon">
            <div class="map__address">${MapModel.contacts.address}</div>
            <div class="map__phone">
              <a class="map__link" href="tel:+${MapModel.contacts.phone}">+${MapModel.contacts.phone}</a>
            </div>
          </div>
        `
      }, {
        iconLayout: "default#image",
        iconImageHref: MapModel.imageURL,
        iconImageSize: [50, 50],
        iconImageOffset: [-25, -35],
      });

      myMap.controls.remove('searchControl'); // удаляем поиск
      myMap.controls.remove('trafficControl'); // удаляем контроль трафика
      myMap.controls.remove('typeSelector'); // удаляем тип
      // myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
      myMap.controls.remove('rulerControl'); // удаляем контрол правил

      myMap.geoObjects.add(placemark);
      placemark.balloon.open();
    }
    
    ymaps.ready(init);
  }
}