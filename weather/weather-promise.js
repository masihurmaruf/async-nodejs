const request = require('request');

var getWeatherPromise = (latitude, longitude) => {
  return new Promise((resolve, reject) => {
    request({
      url: `https://api.darksky.net/forecast/your_key/${latitude},${longitude}`,// sign up to forecast io for the keys
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve({
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      } else {
        reject('Unable to fetch weather data.')
      }
    });
  });
}

module.exports.getWeatherPromise = getWeatherPromise;
