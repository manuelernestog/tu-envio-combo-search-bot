const province_module = require("./province-module");

module.exports = {
    start_bot: function (msg) {
        console.log("Abrieron el bot-----------------------------------------------------------------------------------")
        bot.sendMessage(msg.chat.id, "Hola, soy TuEnvioComboSearchBot (TECSbot). Selecciona /provincias para obtener el listado de canales con alertas automáticas disponibles o /ayuda si tienes alguna duda.", {
            "reply_markup": {
                "keyboard": [["/provincias"], ["/ayuda"]], 'resize_keyboard': true
            }
        });
    },
    send_message: function (message, product) {
        store_link = {inline_keyboard: [[{text: "\u{1F6D2} Ir al producto", url: product.url}]]}
        const chat_id = province_module.get_chat_id_by_province(product.province);
        bot.sendMessage(chat_id, message, {parse_mode: 'HTML', reply_markup: store_link});
    },
    get_provinces_btn: function (msg) {
        bot.sendMessage(msg.chat.id, 'Lista de Canales de Alertas Automáticas', province_module.get_province_btn());
    },
    help_message: function (msg) {
        const help_message = `<b>\u{1F449} Que es TuEnvioComboSearchBot?</b>
Es un robot  que loacaliza nuevos productos en las tiendas virtuales TuEnvio y los publica en canales de Telegram segun su provincia.
<b>\u{1F449} Porque se creo este robot ?</b>
La tienda virtual TuEnvio no cuentan con un sisitema para notificar la publicación de nuevos productos. El robot se encarga de este trabajo, notificando a todos los usuarios subscritos a los diferentes canales de difusión.
<b>\u{1F449} Como funciona ?</b>
El robot busca sistematicamente en las tiendas virtuales nuevos productos. una vez encontrados los publica en el canal que le corresponda, notifificando asi a todos los usuarios subscritos.
<b>\u{1F449} Es mejor el robot que buscar personalmente?</b>
El robot trabaja los 7 dias de la semana de 8am a 6pm sin interrupciones, revisando todas las tiendas del país en cuestion de segundos. Saque usted sus propias concluciones :)
<b>\u{1F449} Porque un canal y no una aplicación?</b>
La publicación en un canal facilita que la busqueda en las tienda se realize una sola vez efectuándose desde el servidor donde está alojado el robot, las aplicaciones con este fin impactan negativamente en la estabilidad de la tienda ya las búsquedas se realizan desde cada terminal (Telefono), sobrecargando el sitio y haciéndolo inaccesible en ocasiones.
<b>\u{1F449} Quien desarrolló el robot ?</b>   
El robot es desarrollado por el Proyecto Zuntek, conformado por ingenieros informáticos cubanos con el objetivo de contribuir con la informatización de la sociedad mediante el desarrollo de soluciones informáticas para la poblacion cubana.
`;
        bot.sendMessage(msg.chat.id, help_message, {parse_mode: 'HTML'});
    }
}

