const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
// console.log(place);

if(!address){
    console.log('Please provide an address');
} else {
    geocode(address, (error, { Latitude, Longitude, Place } ) => { // (address, (error, response)) and response = lat,long, place // explained preety well in web server
        if(error){
            return console.log(error);
        }
        // const { Latitude, Longitude, Place } = data // Destructuring but instead of doing here we will directly do in geocode()
        forecast(Latitude, Longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(Place);
            console.log(forecastData);
        })
    })
}


