#Jamswitch Wagon
An easy wagon for the interswicth payments API

<b>npm install jam-switch-wagon</b>

This module is still in development mode

var jam = require('jam-switch-wagon').run<br/>
    , clientid = ''<br/>
    , clientsecret = ''<br/>
    , clientcert = ''<br/>
    , clienttype = ''<br/>
    , clientband = ''<br/>
    , data = ''+clientid+','+clientsecret+','+clientcert+','+clienttype+','+clientband+'';<br/>

 jam(data, function (response) { <br/>
    console.log("response: "+response);</br>
});