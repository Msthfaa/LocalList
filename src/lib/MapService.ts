// Initialize the platform object
class MapService {
  map: any;
  behavior: any;

  createMap(elTarget: string): any {
    const platform = new H.service.Platform({
      apikey: "E8g4h3WUcXCUexRyVfZzNrEVmCu99jG_ew5vaCMhmoM",
    });

    const defaultLayers = platform.createDefaultLayers();

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

    this.behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
  }

  createMarker(lat: Number, long: Number) {
    var svgMarkup =
      '<svg width="24" height="24" ' +
      'xmlns="http://www.w3.org/2000/svg">' +
      '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
      'height="22" /><text x="12" y="18" font-size="12pt" ' +
      'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
      'fill="white">H</text></svg>';

    // Create an icon, an object holding the latitude and longitude, and a marker:
    const icon = new H.map.Icon(svgMarkup),
      coords = { lat: lat, lng: long },
      marker = new H.map.Marker(coords, { icon: icon });

    this.map.addObject(marker);
    this.map.setCenter(coords);
  }
}

export default MapService;
