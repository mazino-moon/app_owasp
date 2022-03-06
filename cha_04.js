setImmediate(function(){
    Java.perform(function(){
      Java.choose("uk.rossmarks.fridalab.MainActivity", {
        onMatch : function(chall_04){
          chall_04.chall04("frida");
          console.log("solved chal 04good ");
       },
         onComplete  : function(){
        console.log("solved chal 04 ");
    }
       
 
})


        })

})

