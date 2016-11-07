var utils = require('./Jam_Switch_Utils');
var transport = require('./Jam_Switch_Transporter').transport;
var jamauth = require('./Jam_Switch_Auth');
var auth_final = jamauth.auth;

exports.traveller = function (args, callback) {
    //var args = arguments, l = args.length;
    var burst_collection = args.toString().split(",");
    //
    var collection_new = {
        client_id: burst_collection[0] || auth_final.client_id,
        client_secret: burst_collection[1] || auth_final.client_secret,
        client_cert: burst_collection[2] || auth_final.certificate,
        client_type: burst_collection[3] || "inquiry",
        client_band: burst_collection[4] || {paymentcode: '506742',customerid: '1234567',requestReference: utils.requestreference(),cardpan: '627629020217176055',customeremail: 'age2ho@gmail.com',customermobile: '08168984827'}
    };
    //
    transport(collection_new, function (arrival) {
        callback(arrival);
    });
    //
}
//


