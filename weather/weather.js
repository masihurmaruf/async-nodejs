const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  request({
      url: `https://api.darksky.net/forecast/your_key/${latitude},${longitude}`,// sign up to forecast io for the keys
      json: true
  }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
          callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
          });
      } else {
        callback('Unable to fetch weather data.')
      }
  });
}

module.exports.getWeather = getWeather;
