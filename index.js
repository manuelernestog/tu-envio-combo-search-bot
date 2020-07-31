const Cron = require("node-cron");
const TelegramBot = require('node-telegram-bot-api');
const Fs = require('fs');
const bot_module = require('./modules/bot-module');
const product_list_operations = require('./modules/products-list-operations');

const botKey = "1299051161:AAH1Lut4GeEd4HvAbRwRC87bwltM31Rt_y0";
const productListPages = JSON.parse(Fs.readFileSync('assets/product-list-pages.json', 'utf8'));

global.bot = new TelegramBot(botKey, {polling: true});
global.craw = require('./modules/crawler-module');
global.activeProductsList = {test: [], habana: [], ciego: []}

Cron.schedule('*/2 6-20 * * *', () => {
    console.log('Iniciando Nueva Revision' + Date());
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

Cron.schedule('1 20 * * *', () => {
    console.log('Limpiando lista de productos');
    product_list_operations.clean_product_list();
});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hola, soy TuEnvioComboSearchBot (TECSbot). Selecciona /provincias para obtener el listado de canales disponibles o /ayuda para saber un poco mas de mi.", {
        "reply_markup": {
            "keyboard": [["/provincias"], ["/ayuda"]]
        }
    });
});

bot.onText(/\/provincias/, function get_provinces_chanel_list(msg) {
    bot_module.get_provinces_btn(msg);
});

bot.onText(/\/ayuda/, (msg) => {
    bot_module.help_message(msg);
});
