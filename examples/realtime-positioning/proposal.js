var sensor = new sensors.Geolocation({ accuracy: "high" });

sensor.onchange = function(event) {
    var coords = [event.data.latitude, event.data.longitude];
    updateMap(null, coords, event.data.accuracy);
};

sensor.onerror = function(error) {
    updateMap(e);
};

