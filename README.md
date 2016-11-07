#Jamswitch Wagon
An easy wagon for the interswicth payments API

npm install jam-switch-wagon

This module is still in development mode

var jam = require('jam-switch-wagon').run<br/>
    , clientid = ''
    , clientsecret = ''
    , clientcert = ''
    , clienttype = ''
    , clientband = ''
    , data = ''+clientid+','+clientsecret+','+clientcert+','+clienttype+','+clientband+'';

 jam(data, function (response) {
    console.log("response: "+response);
});