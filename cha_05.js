setImmediate(function(){
    Java.perform(function(){
      var chal05 = Java.use("uk.rossmarks.fridalab.MainActivity");
// chal05.chall05.implementation = function(){
//   this.chall05('frida');
//   console.log("solve chal5");
//   return
// }
chal05.chall05.overload("java.lang.String").implementation = function(arg){
this.chall05("frida");
}




        })

})

