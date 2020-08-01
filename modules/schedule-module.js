const Cron = require("node-cron");
const product_list_operations = require('./products-list-operations');
const Fs = require('fs');
const habanaStoreList = JSON.parse(Fs.readFileSync('./assets/store-list-habana.json', 'utf8'));
const cubaStoreList = JSON.parse(Fs.readFileSync('./assets/store-list-cuba.json', 'utf8'));

module.exports.init_schedule = function () {
    Cron.schedule('*/2 8-9 * * *', () => {
        console.log('iniciando revision de las de 2 min');
        review_habana_stores();
        review_cuba_stores();
    });
    Cron.schedule('*/5 10-11 * * *', () => {
        console.log('iniciando revision de las de 5 min');
        review_habana_stores();
        review_cuba_stores();
    });
    Cron.schedule('*/10 12-18 * * *', () => {
        console.log('iniciando revision de las de 10 min');
        review_habana_stores();
        review_cuba_stores();
    });
    Cron.schedule('1 18 * * *', () => {
        console.log('Limpiando lista de productos');
        product_list_operations.clean_product_list();
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

function send_craw_request(page){
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

