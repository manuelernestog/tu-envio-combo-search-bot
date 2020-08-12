const fs = require('fs')
const request = require('request')

module.exports = (url, callback, error_callback) => {
    const options = {
        url: url,
        headers: {
            "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4211.0 Safari/537.36"
        }
    };
    const url_array = url.split('/');
    const file_name = url_array[url_array.length - 1]
    const path = `./public/${file_name}`;
    request.head(options, (err, res, body) => {
        request(options)
            .on('error', error_callback)
            .pipe(fs.createWriteStream(path))
            .on('close', callback)
    })
}