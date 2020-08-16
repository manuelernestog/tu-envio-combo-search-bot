const province_module = require("./province-module");
const fs = require('fs')

module.exports = {
    start_bot: function (msg) {
        bot.sendMessage(msg.chat.id, "Hola, soy TuEnvioComboSearchBot (TECSbot). Selecciona /provincias para obtener el listado de canales con alertas automáticas disponibles o /ayuda si tienes alguna duda.", {
            "reply_markup": {"keyboard": [["/provincias"], ["/ayuda"]], 'resize_keyboard': true}
        });
    },

    send_product_message: function (message, product) {
        const store_link = {inline_keyboard: [[{text: "\u{1F6D2} Ir al producto", url: product.url}]]}
        const chat_id = province_module.get_chat_id_by_province(product.province);
        bot.sendMessage(chat_id, message, {parse_mode: 'HTML', reply_markup: store_link});
    },

    send_img_message: function (message, product) {
        const store_link = {inline_keyboard: [[{text: "\u{1F6D2} Ir al producto", url: product.url}]]}
        const chat_id = province_module.get_chat_id_by_province(product.province);
        const img_path = `./public/${product.img.split('/').pop()}`;
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
        bot.sendMessage(msg.chat.id, 'Lista de Canales de Alertas Automáticas', province_module.get_province_btn());
    },

    send_zuntek_info_to_all: function () {
        const msg = `Las alertas de este canal son publicadas por @TuEnvioComboSearchBot desarrollado por el Proyecto Zuntek. Para enviarnos sugerencias, estar al tanto de mejoras y nuevas aplicaciones puede encontrarnos en Facebook como <b>Zuntek</b> \u{1F642}
----------------------------------------------------------
 \u{26A0} Por le momento este servicio esta en desarrollo por lo que no esta disponible todo el dia y puede notar problemas en su funcionamiento. Lamentamos las molestias que esto pueda ocasionar. Feliz día y recuerde utilizar correctamente el nasobuco. \u{1F637}
`;
        const opt = {parse_mode: 'HTML', disable_web_page_preview: true};
        send_message_to_all(msg, opt);
    },

    help_message: function (msg) {
        const help_message = `<b>\u{1F449} Que es TuEnvioComboSearchBot?</b>
Es un robot  que localiza nuevos productos en las tiendas virtuales TuEnvio y los publica en canales de Telegram según su provincia.
<b>\u{1F449} Porque se creo este robot ?</b>
La tienda virtual TuEnvio no cuentan con un sistema para notificar la publicación de nuevos productos. El robot se encarga de este trabajo, notificando a todos los usuarios subscritos a los diferentes canales de difusión.
<b>\u{1F449} Como funciona ?</b>
El robot trabaja los 24x7 sin interrupciones variando su intensidad segun el horario, revisando todas las tiendas del país en busca de nuevos productos. Una vez encontrados los publica en el canal que le corresponda notificando a todos los usuarios subscritos.
<b>\u{1F449} Porque un canal y no una aplicación?</b>
La publicación en un canal facilita que la búsqueda en las tiendas se realice una sola vez efectuándose desde el servidor donde está alojado el robot, las aplicaciones con este fin impactan negativamente en la estabilidad de la tienda ya las búsquedas se realizan desde cada terminal, sobrecargando el sitio y haciéndolo inaccesible en ocasiones.
<b>\u{1F449} Quien desarrolló el robot ?</b>   
El robot es desarrollado por el Proyecto Zuntek, conformado por ingenieros informáticos cubanos con el objetivo de contribuir con la informatización de la sociedad mediante el desarrollo de soluciones informáticas para la población.
`;
        bot.sendMessage(msg.chat.id, help_message, {parse_mode: 'HTML'});
    }
}

