const fs = require('fs')
const request = require('request')

const download = (url, path, callback) => {
    const options = {
        url: url,
        headers: {
            "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4211.0 Safari/537.36"
        }
    };
    request.head(options, (err, res, body) => {
        request(options)
            .pipe(fs.createWriteStream(path))
            .on('close', callback)
    })
}

const url = 'https://www.tuenvio.cu/santiago/App_Themes/Santiago_CU/images/BANNER-FOOTER-1.png'
const path = './public/image.png'

download(url, path, () => {
    console.log('✅ Done!')
})