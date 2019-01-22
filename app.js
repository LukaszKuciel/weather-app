const yargs = require('yargs')
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
    .options({
        a: {
            demand : true,
            alias: 'address',
            describe : 'Address to fetch weather for',
            string : true
        }
    })
    .help()
    .alias('help', 'h')
    .argv

geocode.geocodeAddress(argv.a, (errorMsg, results) => {
    if(errorMsg){
        console.log(errorMsg)
    }else if(results){
        console.log(results.address)
        weather.getWeather(results.latitude, results.longitude, (weatherErrorMsg, weatherResults) => {
            if(weatherErrorMsg){
                console.log(weatherErrorMsg)
            }else if(weatherResults){
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`)
            }
        })
    }
})



