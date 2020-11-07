const request = require('request')

const geocode = (address,callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZG1hdXJ5YSIsImEiOiJja2FkdjFlMHYwY3FqMnJvMWd0eDE2amlyIn0.3GEI-zm-lkkfXxubKKOuxg&limit=1` ;
    
    request({ url, json:true},(error,response) => {
        if(error){
            callback('unable to connect server!',undefined) ;
        } else if(response.body.features.length === 0){
            callback('please enter valid place name!',undefined) ;
        } else {
            const features = response.body.features[0] ;
            callback(undefined,{
                latitude: features.center[1],
                longitude: features.center[0],
                placeName: features.place_name
            }) ;
        }
    })
}

module.exports = geocode ;