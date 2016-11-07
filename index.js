var transport_terminal = require('./engine/Jam_Switch_Transport_Terminal').traveller;
/*
@param t_terminal
 */
exports.run = function (collection, callback) {
    transport_terminal(collection, function (arrival) {
        callback(arrival);
    });
}