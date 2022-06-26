let myPromise = new Promise((resolve , reject) => {
    throw new Error('Some error has occured');
});

myPromise
        .then((successMessage) => {
                console.log(successMessage);
        });

myPromise
        .catch((errorMessage) => {
            console.log(errorMessage);
        });    