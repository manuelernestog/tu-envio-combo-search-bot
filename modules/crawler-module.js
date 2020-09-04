const Crawler = require("crawler");
const tu_envio = require('./stores/tu-envio');

module.exports = new Crawler({
    maxConnections: 20,
    timeout: 40000,
    retries: 2,
    headers: {
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4211.0 Safari/537.36",
        "Cookie": "asd"
    },
    method: 'GET',
    callback: function (error, res, done) {
        if (res.statusCode == 200)
            tu_envio.process_response(res);
        done();
    }
});
