import markerSvg from "./markerSvg";

// Initialize the platform object
class MapService {
  map: any;
  behavior: any;
  platform: any;

  createMap(elTarget: string): any {
    this.platform = new H.service.Platform({
      apikey: "E8g4h3WUcXCUexRyVfZzNrEVmCu99jG_ew5vaCMhmoM",
    });

    const defaultLayers = this.platform.createDefaultLayers();

    this.map = new H.Map(
      document.getElementById(elTarget),
      // Define the map type, the initial zoom value, and then provide center coordinates:
      defaultLayers.vector.normal.map,
      {
        zoom: 16,
        center: {
          lat: -7.249,
          lng: 112.7507,
        },
        pixelRatio: window.devicePixelRatio || 1,
      }
    );

    this.behavior = new H.mapevents.Behavior(
      new H.mapevents.MapEvents(this.map)
    );
  }

  createMarker(lat: Number, lng: Number) {
    var svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
  </svg>`;

    // Create an icon, an object holding the latitude and longitude, and a marker:
    const icon = new H.map.Icon(svgMarkup),
      coords = { lat: lat, lng: lng },
      marker = new H.map.Marker(coords, { icon: icon });

    this.map.addObject(marker);
  }

  setCenter(lat: number, long: number) {
    this.map.setCenter({ lat: lat, lng: long }, true);
    if (this.map.getZoom < 16) {
      this.map.setZoom(16, true);
    }
  }
}

export default MapService;
