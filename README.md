#Jamswitch Wagon
An easy wagon for the interswicth payments API

npm install jam-switch-wagon

This module is still in development mode

var jam = require('jam-switch-wagon').run
    , clientid = ''\n
    , clientsecret = ''\n
    , clientcert = ''\n
    , clienttype = ''\n
    , clientband = ''\n
    , data = ''+clientid+','+clientsecret+','+clientcert+','+clienttype+','+clientband+'';\n

 jam(data, function (response) {\n
    console.log("response: "+response);\n
});\n