var bandwagon = require('./Jam_Switch_Bandwagon').bandwagon;
var utils = require('./Jam_Switch_Utils');
var lane_init = require('./Jam_Switch_Lane');
var lane_config = lane_init.roller_default();
//
exports.transport = function (collection, callback) {
    //
    var encoded_auth = 'InterswitchAuth ' + utils.encode_auth(collection['client_id'], collection['client_secret']);
    //
    var travellers = JSON.stringify(collection['client_band']);
    //
    var request_headers = {
        'Content-Type': lane_config['content_type'].toString("utf8"),
        'nonce': utils.nounce(),
        'timestamp': utils.timestamp(),
        'signature': utils.signature(collection.client_id, collection.client_secret, lane_config['driver'].toString("utf8")+lane_config['do_inquiry'].toString("utf8"), lane_config['conductor_post'].toString("utf8"), utils.timestamp(), utils.nounce(), collection['client_band']),
        'Pragma': lane_config['pragma'].toString("utf8"),
        'content-length': travellers.length,
        'cache-control': lane_config['cache_control'].toString("utf8"),
        'accept': lane_config['accept'].toString("utf8"),
        'Date': utils.date(),
        'Authorization': encoded_auth,
        'terminalid': lane_config['terminalid'].toString("utf8"),
        'signatureMethod': lane_config['signaturemethod'].toString("utf8")
    };
    //
    var band = {
        url: lane_config['driver'].toString("utf8") + lane_config['do_inquiry'].toString("utf8"),
        method: lane_config['conductor_post'].toString("utf8"),
        headers: request_headers,
        body: travellers
    };
    console.log(band);
    //
    bandwagon(band, function (band_arrival) {
        //
        callback(band_arrival);
    });
}