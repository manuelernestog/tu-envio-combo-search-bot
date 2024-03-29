const cron1 = require("node-cron");
const cron2 = require("node-cron");
const bot_module = require('./bot-module');
const file_module = require('./file-module');
const product_list_operations = require('./products-list-operations');
const Fs = require('fs');
const habanaStoreList = JSON.parse(Fs.readFileSync('./assets/store-list-habana.json', 'utf8'));
const cubaStoreList = JSON.parse(Fs.readFileSync('./assets/store-list-cuba.json', 'utf8'));

module.exports.init_schedule = function () {
    cron1.schedule('* 8-10 * * *', () => {
        console.log("Iniciando Revision " +new Date());
        review_habana_stores();
    });
    cron1.schedule('*/2 11-15 * * *', () => {
        console.log("Iniciando Revision " +new Date());
        review_habana_stores();
    });
    cron1.schedule('0 16 * * *', () => {
        file_module.remove_public_folder();
        file_module.crete_public_folder();
    });
    cron2.schedule('0 16 */7 * *', () => {
        bot_module.send_zuntek_info_to_habana();
    });
};

function review_habana_stores() {
    habanaStoreList.forEach(page => send_craw_request(page));
}

function review_cuba_stores() {
    cubaStoreList.forEach(page => send_craw_request(page));
}

function send_craw_request(page) {
    craw.queue({
        uri: page.base_url + page.url_end,
        page_type: page.page_type,
        province: page.province,
        store: page.store,
        base_url: page.base_url,
        url_end: page.url_end,
    });
}

