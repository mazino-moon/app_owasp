


setImmediate(function(){
    Java.perform(function(){
      var chal07 = Java.use("uk.rossmarks.fridalab.challenge_07");

      Java.choose("uk.rossmarks.fridalab.MainActivity",{
        onMatch: function(instance){
                for(let i=1000; i<10000; i++){
                        if(chal07.check07Pin(i.toString())){
                                instance.chall07(i.toString());
                                console.log("find");
break;

                        }

                }
                
        },
        onComplete : function(){console.log("sovle chal 07");
}
})

     
    




        })

})

