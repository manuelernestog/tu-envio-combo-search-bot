const province_module = require("./province-module");

module.exports = {
    send_message: function (message, product) {
        store_link = {inline_keyboard: [[{text: "\u{1F310} Ir al producto", url: product.url}]]}
        const chat_id = province_module.get_chat_id_by_province(product.province);
        bot.sendMessage(chat_id, message, {parse_mode: 'HTML', reply_markup: store_link});
    },
    get_provinces_btn: function (msg) {
        bot.sendMessage(msg.chat.id, 'Lista de Canales por Provincia', province_module.get_province_btn());
    }
}
