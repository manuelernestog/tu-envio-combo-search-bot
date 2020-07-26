const Cron = require("node-cron");
const TelegramBot = require('node-telegram-bot-api');
const Fs = require('fs');

const botKey = "901378589:AAHOLyMlmeUqt1oUzz3vEUxn3rbBuGK0fPk";
const productListPages = JSON.parse(Fs.readFileSync('assets/product-list-pages.json', 'utf8'));

global.bot = new TelegramBot(botKey, {polling: true});
global.craw = require('./modules/crawler-module');
global.activeProductsList = []

Cron.schedule('* * * * *', () => {
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
