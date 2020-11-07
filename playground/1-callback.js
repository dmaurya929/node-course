const add = (a, b, callback) => {
    // setTimeout( () => {
    //     const sum = a+b ;
    //     callback(sum) ;
    // }, 2000) ;
    callback(a+b) ;
} 

add(9,2, (sum) => {
    console.log(sum) ;
}) ;