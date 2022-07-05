let myPromise = new Promise((resolve , reject) => {
    const x = 'abc';
    const y = 'abc';

    if(x === y){
        resolve();
    }else{
        reject();
    }

});

myPromise
       .then(() =>{
        console.log('Success');
       });

 myPromise
       .then(() =>{
        console.log('Twice Success');
       });

myPromise
       .catch(() => {
        console.log('Some error has occured');
       });