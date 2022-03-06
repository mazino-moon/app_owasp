Java.perform(function(){
    var Activity = Java.use("android.app.Activity")
    Activity.onResume.implementation = function(){
        console.log("{*} onresume() got called");
        this.onResume();
    }
})