const request = require('request');

var geocodeAddress = (address, callback) => {
  address = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('UNABLE TO CONNECT TO GOOGLE SERVER');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address!');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}

module.exports.geocodeAddress = geocodeAddress;
