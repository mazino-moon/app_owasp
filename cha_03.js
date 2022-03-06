setImmediate(function(){
    Java.perform(function(){
          var chal03 = Java.use("uk.rossmarks.fridalab.MainActivity");

          chal03.chall03.implementation =  function(){
            console.log("chal03 cls");
            return  true;
          }


        })

})

