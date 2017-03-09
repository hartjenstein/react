function addPromise ( a, b ) {
    let sum = a + b;
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(isNaN(a) || isNaN(b)){
                reject('Not a number');
            }
            resolve(sum);
        }, 1000);        
    });
}
addPromise(4,4).then((sum) => {
    console.log('Success', sum);
}, (err) => {
    console.log('Error: ', err);    
});