
 
 //시간지연
 setTimeout(function(){
    console.log("10s chall 06");
    //오류방지
setImmediate(function(){
  
    Java.perform(function(){

        var mainactivity = Java.use("uk.rossmarks.fridalab.MainActivity");
        //btn객체 가져오기
        var btn = Java.use("android.widget.Button");
        // 문자열 객체 가져오기
        var string = Java.use("java.lang.String");

        
       var chal_01 =Java.use("uk.rossmarks.fridalab.challenge_01");
       var chal_06 =Java.use("uk.rossmarks.fridalab.challenge_06");
       var chal_07 =Java.use("uk.rossmarks.fridalab.challenge_07");

       //객체 값 변경
        chal_01.chall01.value = 1;
        console.log("solved chal 01");

        mainactivity.chall03.overload().implementation = function(){
    console.log("solve chal 03");
return true;
}
mainactivity.chall05.overload("java.lang.String").implementation = function(arg){
    this.chall05("frida");
    console.log("solve chal 05");

}

        Java.choose("uk.rossmarks.fridalab.MainActivity",{
            onMatch:function(instance){
             //인스턴트 실행 값 변경
                instance.chall02();
                instance.chall04("frida");
                instance.chall06(chal_06.chall06.value);
                
                for(let i =1000;i<10000; i ++){
                    if(chal_07.check07Pin(i.toString())){
                        instance.chall07(i.toString());
                        console.log("chal07 cls");
                        break;
                    }

                }
                //버튼 가져오기
                var btn_class = instance.findViewById(0x7f07002f);
                //버튼 형변환
                var real_btn = Java.cast(btn_class,btn);
                real_btn.setText(string.$new("Confirm"));
                instance.chall08();
                console.log("solv chal 07");
                console.log("solve chal 08");
                console.log("solve chal 06");

            }

            ,
            onComplete :function(){
                console.log("solve chal2");
                console.log("solve chal4");

            } 
        })
    })
})

 },10000)