const province_module = require("./province-module");
const fs = require('fs')

module.exports = {
    start_bot: function (msg) {
        const message = "Hola, soy TuEnvioComboSearchBot (TECSbot). Selecciona /provincias para obtener el listado de canales con alertas automáticas disponibles o /ayuda si tienes alguna duda.";
        const opt = {"reply_markup": {"keyboard": [["/provincias"], ["/ayuda"]], 'resize_keyboard': true}};
        bot.sendMessage(msg.chat.id, message, opt);
    },

    send_product_message: function (message, product) {
        const store_link = {inline_keyboard: [[{text: "\u{1F6D2} Ir al producto", url: product.url}]]}
        const chat_id = province_module.get_chat_id_by_province(product.province);
        bot.sendMessage(chat_id, message, {parse_mode: 'HTML', reply_markup: store_link});
    },

    send_img_message: function (message, product) {
        const chat_id = province_module.get_chat_id_by_province(product.province);
        const img_path = `./public/${product.img.split('/').pop()}`;
        const store_link = {inline_keyboard: [[{text: "\u{1F6D2} Ir al producto", url: product.url}]]}
        bot.sendPhoto(chat_id, img_path, {parse_mode: 'HTML', reply_markup: store_link, caption: message})
            .catch(function (error) {
                bot.sendMessage(chat_id, message, {parse_mode: 'HTML', reply_markup: store_link});
            });
    },

    send_message_to_all: function (message, opt) {
        for (var key in activeProductsList)
            bot.sendMessage(province_module.get_chat_id_by_province(key), message, opt);
    },

    get_provinces_btn: function (msg) {
        bot.sendMessage(msg.chat.id, 'Lista de Canales de Alertas Automáticas.', province_module.get_province_btn());
    },

    send_zuntek_info_to_all: function () {
        const msg = fs.readFileSync('./assets/zuntek_sms.txt', 'utf8');
        const opt = {parse_mode: 'HTML', disable_web_page_preview: true};
        send_message_to_all(msg, opt);
    },
    send_zuntek_info_to_habana: function () {
        const msg = fs.readFileSync('./assets/zuntek_sms.txt', 'utf8');
        const opt = {parse_mode: 'HTML', disable_web_page_preview: true};
        bot.sendMessage("-1001486503580", msg, opt);
    },
    help_message: function (msg) {
        const message = fs.readFileSync('./assets/help_sms.txt', 'utf8');
        bot.sendMessage(msg.chat.id, message, {parse_mode: 'HTML'});
    }
}

