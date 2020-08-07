const cron1 = require("node-cron");
const cron2 = require("node-cron");
const cron3 = require("node-cron");
const bot_module = require('../bot-module');
const product_list_operations = require('./products-list-operations');
const Fs = require('fs');
const habanaStoreList = JSON.parse(Fs.readFileSync('./assets/store-list-habana.json', 'utf8'));
const cubaStoreList = JSON.parse(Fs.readFileSync('./assets/store-list-cuba.json', 'utf8'));

module.exports.init_schedule = function () {
    cron1.schedule('0 7 * * *', () => {
        product_list_operations.clean_product_list();
    });
    cron1.schedule('*/2 8-9 * * *', () => {
        review_habana_stores();
    });
    cron2.schedule('*/5 8-9 * * *', () => {
        review_cuba_stores();
    });
    cron1.schedule('*/5 10-11 * * *', () => {
        review_cuba_stores();
        review_habana_stores();
    });
    cron1.schedule('*/10 12-16 * * *', () => {
        review_habana_stores();
        review_cuba_stores();
    });
    cron1.schedule('*/30 17-23 * * *', () => {
        review_habana_stores();
        review_cuba_stores();
    });
    cron1.schedule('*/30 0-7 * * *', () => {
        review_habana_stores();
        review_cuba_stores();
    });
    cron3.schedule('0 7 * * 1', () => {
        msg = `Las alertas de este canal son publicadas por @TuEnvioComboSearchBot, bot desarrollado por el Proyecto <b>Zuntek</b>. Para enviarnos sugerencias, estar al tanto de mejoras y nuevas aplicaciones puede seguirnos en https://www.facebook.com/Zuntek \u{1F642}`;
        opt = {parse_mode: 'HTML', disable_web_page_preview: true};
        bot_module.send_message_to_all(msg, opt);
    });
};


function review_habana_stores() {
    console.log('Iniciando Nueva Revision Habana ' + Date());
    habanaStoreList.forEach(function (page) {
        send_craw_request(page)
    });
}

function review_cuba_stores() {
    console.log('Iniciando Nueva Revision Cuba ' + Date());
    cubaStoreList.forEach(function (page) {
        send_craw_request(page)
    });
}

function send_craw_request(page) {
    craw.queue({
        uri: page.base_url + page.url_end,
        page_type: page.page_type,
        store_type: page.store_type,
        province: page.province,
        store: page.store,
        base_url: page.base_url,
        url_end: page.url_end,
    });
}

