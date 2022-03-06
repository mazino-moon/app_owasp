setTimeout(function(){

Java.perform(function(){
var CertificateFactory = Jva.use("java.security.cert.CertificateFactory");
var cf = CertificateFactory.getInstance("X.509");

var FileInputStream = Java.use("java.io.FileInputStream");
var fileInputStream = FileInputStream.$new("/data/local/tmp/cert-der.crt");
var ca = cf.generateCertificate(fileInputStream);


//2
var KeyStore = Java.use("java.security.KeySore");
var KeyStoreType = KeyStore.getDefaultType();
var keyStore = KeyStore.getInstance(KeyStoreType);
keyStore.load(null,null);
keyStore.setCertificateEntry("ca",ca);


//3
var TrustManagerFactory = Java.use("javax.net.ssl.TrustManagerFactory");
var tmfAlgorithm = TrustManagerFactory.getDefaultAlgorithm();
var tmf = TrustManagerFactory.getInstance(tmfAlgorithm);
tmf.init(keyStore);
var tmf_get = tmf.getTrustManagers();

//4
var SSLContext = Java.use("javax.net.ssl.SSLContext");
SSLContext.init.implementation = function(a,b,c){
   SSLContext.init.call(this,a,tmf_get,c); 
}
})


})