exports.roller_default = function () {
    //
    var config = {
        'driver': 'https://sandbox.interswitchng.com',
        'conductor_post': 'POST',
        'conductor_get': 'GET',
        'do_inquiry': '/api/v1/quickteller/transactions/inquirys',
        'do_billers': '/api/v1/quickteller/billers',
        'do_categories': '/api/v1/quickteller/categorys',
        'resource_url': '/api/v1/quickteller/transactions',
        'terminalid': '3IWP0001',
        'signaturemethod': 'SHA1',
        'pragma': 'no-cache',
        'cache_control': 'no-cache',
        'content_type': 'application/json;charset=utf-8',
        'accept': 'application/json'

    }
    //
    return config;
}

