//인터페이스를 후킹하는 기능은 없다고함 현재까지

setImmediate(function(){
Java.perform(function(){

var exit_bypass = Java.use("java.lang.System");
// var pw = Java.use("sg.vantagepoint.uncrackable1.a");
// pw.a.implementation = function(arg){
//     console.log("true hook");
//     return true;
// }

exit_bypass.exit.implementation = function(arg){
    console.log("bypasS");
}
var decrypteclass = Java.use("sg.vantagepoint.a.a");
decrypteclass.a.implementation = function(arg,arg2){
    var secret_string = this.a(arg,arg2);
    for(var i =0; i < secret_string.length; i++){
        console.log(String.fromCharCode(secret_string[i]));
console.log(secret_string[i]);
    }
    console.log(secret_string);
    return secret_string;
}

})




})