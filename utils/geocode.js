const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW5zaHVsdGFrbGlrYXIiLCJhIjoiY2wyaWF5ZG1sMGw1bDNicDl6OGlkZXJoayJ9.2BdjWUHrdNiKl0pzgRkE3g&limit=1'

    request({url, json: true}, (error, { body }) => { // Destructuring
        if(error){
            callback('Unable to connect to location service', undefined)
        } else if(body.features.length === 0){
            callback('Unable to find location. Enter a valid location', undefined)
        } else{
            callback(undefined, {
                Latitude: body.features[0].center[1],
                Longitude: body.features[0].center[0],
                Place: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode