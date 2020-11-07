const geocode = require('./utils/geocode.js') ;
const forecast = require('./utils/forecast.js') ;

const address = process.argv[2] ;

if(!address){
    console.log('Please enter address!') ;
}else{
    geocode(address, (error, {latitude,longitude,placeName}={}) => {
        if(error){
            return console.log(error) ;
        }

        forecast(latitude,longitude,(error,forecastData) => {
        if(error){
            return console.log(error) ;
        }

        console.log(placeName) ;
        console.log(forecastData) ;
            
        }) ;
    }) ;
}
