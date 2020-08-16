const Crawler = require("crawler");
const tu_envio = require('./stores/tu-envio');

module.exports = new Crawler({
    maxConnections: 20,
    timeout: 40000,
    headers: {
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4211.0 Safari/537.36",
        "Cookie": "asd"
    },
    method: 'GET',
    callback: function (error, res, done) {
        if (error) {
            console.log('Error cargando la pagina' + res.options.uri);
        } else {
            if (res.statusCode == 200)
                tu_envio.process_response(res);
        }
        done();
    }
});
