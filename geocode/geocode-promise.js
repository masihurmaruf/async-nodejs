const request = require('request');

var geocodeAddressPromise = (address) => {
  return new Promise((resolve, reject) => {
    address = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      json: true
    }, (error, response, body) => {
      if (!error && body.status === 'OK') {
        resolve({address: body.results[0].formatted_address, latitude: body.results[0].geometry.location.lat, longitude: body.results[0].geometry.location.lng});
      } else {
        reject('Unable to find that address!');
      }
    });
  });
}

module.exports.geocodeAddressPromise = geocodeAddressPromise;
