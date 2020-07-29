const province_module = require("./province-module");

module.exports = {
    send_message: function (message, product) {
        store_link = {inline_keyboard: [[{text: "\u{1F6D2} Ir al producto", url: product.url}]]}
        const chat_id = province_module.get_chat_id_by_province(product.province);
        bot.sendMessage(chat_id, message, {parse_mode: 'HTML', reply_markup: store_link});
    },
    get_provinces_btn: function (msg) {
        bot.sendMessage(msg.chat.id, 'Lista de Canales Disponibles', province_module.get_province_btn());
    },
    help_message: function (msg) {
        const help_message = `<b>\u{1F449} Que es TuEnvioComboSearchBot ?</b>
Es un robot de Telegram que se encarga de buscar nuevos combos que se publiquen en las tiendas virtuales Tu Envio.
<b>\u{1F449} Como funciona ?</b>
El bot TuEnvioComboSearchBot busca en cada 2 minutos (Para no hacer tantas peticiones a los servidores) en las tiendas vituales si han publicado algun producto nuevo. En caso de encontrar un producto nuevo automaticamente lo publica en el canal que corresponda a la provincia de la tienda donde se encontro el producto.
<b>\u{1F449} Por que un canal y no una aplicacion ?</b>
La publicacion en eun canal facilita que la busqueda que hace el robot es una sola ya que se efectua desde el servidor donde esta alojado el robot, las soluciones que se ejecutan en aplicaciones ejecutan la busqueda desde cada celular o terminal donde se ejecute lo cual es muy perjudicial para el correcto funcionamento de la tienada virtual.
<b>\u{1F449} Que soluciona este Robot ?</b>
La tienda virtual tu envio no tien ningun sisitema de notificacion para avisar a susu usuarios que se agrego un nuevo producto por lo cual tienen que estar constantemente revisando la tienda intentando darse por enterados cuando se publica un nuevo producto. El robot hace este trabajao por ellos y es capaz de notificar a todos los usuarios suscritos a los diferentes canales.
<b>\u{1F449} Es gratis?</b>   
Si, su uso es libre de costo.
<b>\u{1F449} Quien desarrollo el robot y porque?</b>   
El robot fue desarrollado por el Proyecto Zuntek, conformado por ingenieros informaticos cubanos con el objetivo de contribuir con la informatizacion de la sociedad y desarrollar soluciones para la poblacion cubana.
El robot se desarrollo para solventar la necesidad de un sistema de notificaciones automatico de nuevos productos en las tiendas virtuales cubanas.       
`;
        bot.sendMessage(msg.chat.id, help_message, {parse_mode: 'HTML'});
    }
}

