import frida,sys
def on_message(message,data):
    if message['type'] == 'send':
        print(message['payload'])
    else:
        print(message)

jscode = """
Java.perform(function(){
    var Activity = Java.use("android.app.Activity")
    Activity.onResume.implementation = function(){
        console.log("{*} onresume() got called");
        send("[*]send onresume()");
        this.onResume();
    }
})
"""

process = frida.get_usb_device(timeout=10).attach("Chrome")
script = process.create_script(jscode)
script.on('message',on_message)
script.load()
sys.stdin.read()