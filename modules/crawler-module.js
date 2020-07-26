const Crawler = require("crawler");
var process_page_response = require("./process-page-response")

module.exports = new Crawler({
    maxConnections: 20,
    headers: {
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4211.0 Safari/537.36"
    },
    method: 'GET',
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            if (res.statusCode == 200) {
                process_page_response(res);
            }
        }
        done();
    }
});
