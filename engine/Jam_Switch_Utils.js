//
var time = require('node-time');
var crypto = require('crypto');
//
module.exports = {
    //
    encode_auth: function (client_id, client_secret) {
        //
        return new Buffer(client_id + ':' + client_secret).toString('base64');
        //
    },
    //
    timestamp: function () {
        //
        return Math.floor((new Date()).getTime() / 1000);
        //
    },
    //
    nounce: function () {
        //
        return Math.floor(2 * Math.random(29, 500) * 543675 * 15 + Date.now());
        //
    },
    //
    date: function () {
        //
        var rightNow = new Date();
        var temp = new Date(rightNow);
        temp.setUTCHours(rightNow.getHours())
        temp.setUTCMinutes(rightNow.getMinutes())
        temp.setUTCSeconds(rightNow.getSeconds())
        var temp_f = temp.toUTCString()
        console.log(temp_f)
        //
        return temp_f;
        //
    },
    //
    signature: function (client_id, client_secret, resource_url, conductor, time_stamp, nonce, transaction_params) {
        //
        var signatureCipher, signatureCipherFinal, params, signature_f, params_f;
        var resource_url_final = encodeURIComponent(resource_url);
        params_f = JSON.stringify(transaction_params);
        //
        signatureCipher = conductor + '&' + resource_url_final + '&' + time_stamp + '&' + nonce + '&' + client_id + '&' + client_secret;
        //
        params = params_f.toString("&");
        signatureCipherFinal = signatureCipher + params;
        //
        signature_f = crypto.createHash('sha1').update(signatureCipherFinal).digest("hex");
        //
        console.log(signatureCipherFinal)
        return new Buffer(signature_f).toString('base64');

    },
    //
    accessToken: function (auth, passport_url) {
        //
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + auth
        }
        //
        var parameters = "grant_type=client_credentials&scope=profile";
        //
    },
    //
    requestreference: function () {
        //
        return "ISW|API|JAM|"+Math.floor(2 * Math.random(29, 500) * 543675 * 15 + Date.now());
    }

}
