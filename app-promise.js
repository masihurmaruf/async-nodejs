const yargs = require('yargs');
const geocodePromise = require('./geocode/geocode-promise.js');
const weatherPromise = require('./weather/weather-promise');
const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
}).help().alias('help', 'h').argv;

console.log(argv.a);

geocodePromise.geocodeAddressPromise(argv.a).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
  weatherPromise.getWeatherPromise(results.latitude, results.longitude).then((obj) => {
    console.log(JSON.stringify(obj, undefined, 2));
  }).catch((errorMessage) => {
    console.log(errorMessage);
  });
}).catch((errorMessage) => {
  console.log(errorMessage);
});
