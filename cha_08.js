


setImmediate(function(){
    Java.perform(function(){
      var chal07 = Java.use("uk.rossmarks.fridalab.challenge_07");

      var klass = Java.use("android.widget.Button");
      Java.choose("uk.rossmarks.fridalab.MainActivity",{
        onMatch: function(instance){
        var id = instance.findViewById(0x7f07002f);
        //형식을 맞춰주는 함수 klass가 핸들에 부여
       var ch = Java.cast(id,klass);
       var string = Java.use("java.lang.String");
       //$new 자바유즈로 가져온 객체를 순간적으로 인스턴트화 시켜준다
        ch.setText(string.$new("Conform"));
        console.log("zz");
                
        },
        onComplete : function(){console.log("sovle chal 07");
}
})

     
    




        })

})

