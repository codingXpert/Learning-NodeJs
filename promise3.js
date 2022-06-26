let myPromise = new Promise((resolve , reject) => {
    const x = 'abc';
    const y = 'xyz';

    if(x === y){
        resolve('problem Resolved');
    }else{
        reject('Some error has occured');
    }

});

myPromise
       .then((success) =>{
        console.log(success);
       });

myPromise
       .catch((error) => {
        console.log(error);
       });