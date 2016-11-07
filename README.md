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
    , wagon_load = ''+clientid+','+clientsecret+','+clientcert+','+clienttype+','+clientband+'';<br/>

 jam(wagon_load, function(wagon_arrival) { <br/>
    console.log(wagon_arrival);</br>
});