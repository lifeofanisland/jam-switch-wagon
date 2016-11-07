
exports.lane_stop = function (code, body) {
    //
    switch (code) {
        //
        case 200:
            return body;
            break;
        //
        case 400:
            return body;
        break;
        //
        case 403:
            return body;
            break;
        //
        default:
            return "Aw! snap, an error occured";
            break;
    }

}

