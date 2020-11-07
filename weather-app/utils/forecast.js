const request = require('request') ;


const forecast = (latitude,longitude,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=1b17348ad087ad1f8692458441165339&query=${latitude},${longitude}` ;
    request({ url, json: true}, (error,{body} ) => {
        if(error){
            callback('unable to connect server!',undefined) ;
        }else if(body.error){
            callback('Specify the valid location !',undefined) ;
        }else{
            callback(undefined,{
                weather_descriptions: body.current.weather_descriptions[0],
                temperature: body.current.temperature
            }) ;
        } 
    })
} ;

module.exports = forecast ;