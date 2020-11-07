const https = require('https') ;

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/dasna.json?access_token=pk.eyJ1IjoiZG1hdXJ5YSIsImEiOiJja2FkdjFlMHYwY3FqMnJvMWd0eDE2amlyIn0.3GEI-zm-lkkfXxubKKOuxg&limit=1' ;

const request = https.request(url, (res) => {
    console.log(res.headers) ;
    let data = '' ;
    res.on('data',(chunk) => {
        data+= chunk.toString();
        console.log(data) ;
    })

    res.on('end', ()=> {

    }) ;

})

request.on('error',(error) => {
    console.log(error) ;
    
})

request.end()