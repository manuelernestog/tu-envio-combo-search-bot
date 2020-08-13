process.env["NTBA_FIX_319"] = 1;
process.env["NTBA_FIX_350"] = 1;
const TelegramBot = require('node-telegram-bot-api');
const bot_module = require('./modules/bot-module');
const botKey = "1299051161:AAH1Lut4GeEd4HvAbRwRC87bwltM31Rt_y0";
const schedule_module = require('./modules/schedule-module');
const fs = require('fs');

global.bot = new TelegramBot(botKey, {polling: true});
global.craw = require('./modules/crawler-module');
global.activeProductsList = {
    test: [],
    habana: [],
    ciego: [],
    pinar: [],
    artemisa: [],
    mayabeque: [],
    matanzas: [],
    cienfuegos: [],
    villaclara: [],
    sancti: [],
    camaguey: [],
    tunas: [],
    holguin: [],
    granma: [],
    santiago: [],
    guantanamo: [],
    isla: [],
}

if (!fs.existsSync('./public')){
    fs.mkdirSync('./public');
    fs.chmod('./public', 0o777, (err) => {});
}

schedule_module.init_schedule();

bot.onText(/\/start/, (msg) => {
    bot_module.start_bot(msg);
});

bot.onText(/\/provincias/, function get_provinces_chanel_list(msg) {
    bot_module.get_provinces_btn(msg);
});

bot.onText(/\/ayuda/, (msg) => {
    bot_module.help_message(msg);
});
