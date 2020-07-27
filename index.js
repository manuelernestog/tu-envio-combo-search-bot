const Cron = require("node-cron");
const TelegramBot = require('node-telegram-bot-api');
const Fs = require('fs');
const bot_module = require('./modules/bot-module');

const botKey = "1299051161:AAH1Lut4GeEd4HvAbRwRC87bwltM31Rt_y0";
const productListPages = JSON.parse(Fs.readFileSync('assets/product-list-pages.json', 'utf8'));

global.bot = new TelegramBot(botKey, {polling: true});
global.craw = require('./modules/crawler-module');
global.activeProductsList = []

Cron.schedule('*/2 * * * *', () => {
    console.log('Iniciando Nueva Revision');
    productListPages.forEach(function (page) {
        craw.queue({
            uri: page.base_url + page.url_end,
            page_type: page.page_type,
            store_type: page.store_type,
            province: page.province,
            store: page.store,
            base_url: page.base_url,
            url_end: page.url_end,
        });
    });
});

bot.onText(/\/provincias/, function get_provinces_chanel_list(msg) {
    bot_module.get_provinces_btn(msg);
});

