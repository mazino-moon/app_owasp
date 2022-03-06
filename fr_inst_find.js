setImmediate(function(){
    Java.perform(function(){
            Java.choose("android.view.View",{
                "onMatch": function(instance){

                    console.log("[*] Instance found"+instance.toString());

                },
                "onComplete": function(){
                    console.log("[*]finish heap search");
                }
            })
    })
})