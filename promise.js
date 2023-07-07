 //promise mathod -enoll then progress and finally getcertificate.
 const paymentsuccess = false;
const marks = 90;

function enroll(){
    console.log ('course enrollment is in progress');
 const promise = new Promise((resolve, reject) => {
    setTimeout(function(){
        if(paymentsuccess){
               resolve();
        }else {
            reject('payment failed');
        }
    }, 2000);
 });
 return promise;
}

function progress(){
    const promise= new Promise((resolve, reject) => {
        console.log ('course is progress.....')

    setTimeout (function (){
        if (marks >= 80){
            resolve();
        }else{
            reject('you are could not get enough marks to get the certificte');
        }
    }, 3000);
    })
    return promise;
}

function getcertificate(){

    const promise = new Promise((resolve) => {
        console.log ('preparing your cartificate');
    setTimeout (function (){
        resolve ('congrats! you got the certificate');
    }, 1000);
    })
    return promise;
}

enroll()
     .then(progress) 
     .then(getcertificate)
     .then(function(value){
       console.log (value);
     })
     .catch(function(err){
       console.log(err);
    });