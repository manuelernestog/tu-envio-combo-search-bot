const fs = require('fs');

module.exports = {
    crete_public_folder: function () {
        if (!fs.existsSync('./public')){
            fs.mkdirSync('./public');
            fs.chmod('./public', 0o777, (err) => {});
        }
    },
    remove_public_folder: function () {
        if (fs.existsSync('./public')){
            fs.rmdirSync('./public', { recursive: true });
        }
    },
}


