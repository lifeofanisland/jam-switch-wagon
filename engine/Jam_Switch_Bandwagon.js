var request = require('request');
var lane_stop = require('./Jam_Switch_Finish_Lane').lane_stop;
//
global.init_response = '';
//
exports.bandwagon = function (band, callback) {
    //
    request(band, function (err, response, body) {
        //
        if(!err) {
            callback(lane_stop(response.statusCode, response.body));
        }else{
            callback(lane_stop('',''));
        }
        //
    })
    //
    //return global.init_response;

}


