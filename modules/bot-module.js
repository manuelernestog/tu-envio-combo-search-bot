const province_module = require("./province-module");

module.exports = {
    send_message: function (message, product) {
        const chat_id = province_module.get_chat_id_by_province(product.province);
        if (product.img) {
            bot.sendPhoto(chat_id, product.img, {parse_mode: 'HTML', caption: message});
        } else {
            bot.sendMessage(chat_id, message, {parse_mode: 'HTML'});
        }
    }
}
