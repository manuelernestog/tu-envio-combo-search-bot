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
        const help_message = `<b>\u{1F449} Que es TuEnvioComboSearchBot?</b>
Es un robot  de Telegram que se encarga de buscar nuevos combos que se publiquen en las tiendas virtuales Tu Envio.
<b>\u{1F449} Como funciona ?</b>
El robot TuEnvioComboSearchBot busca en cada 2 minutos (Para no hacer tantas peticiones a los servidores) en las tiendas virtuales si han publicado algún producto nuevo. En caso de encontrar un producto nuevo automáticamente lo publica en el canal que corresponda a la provincia de la tienda donde se encontró el producto.
<b>\u{1F449} Porque un canal y no una aplicación?</b>
La publicación en un canal facilita que la búsqueda que hace el robot es una sola ya que se efectúa desde el servidor donde está alojado el robot, las soluciones que se ejecutan en aplicaciones ejecutan las búsquedas desde cada celular o terminal lo cual es muy perjudicial para el funcionamiento y rendimiento de la tienada virtual.
<b>\u{1F449} Que soluciona este robot ?</b>
La tienda virtual Tu Envio no cuentan con sisitemas de notificación para avisar a sus usuarios de que se agrego un nuevo producto por lo cual tienen que estar constantemente revisando la tienda para conocer si existe algun producto disponible. El robot hace este trabajao por ellos y es capaz de notificar a todos los usuarios subscritos a los diferentes canales de difusión.
<b>\u{1F449} Es gratis?</b>   
Si, su uso es libre de costo. Solo necesia conexion a internet.
<b>\u{1F449} Quien desarrolló el robot y porqué ?</b>   
El robot fue desarrollado por el Proyecto Zuntek, conformado por ingenieros informáticos cubanos con el objetivo de contribuir con la economia del país y la informatización de la sociedad mediante el desarrollo de soluciones informáticas para la poblacion cubana.
El robot se desarrollo para solventar la necesidad de un sistema de notificaciones automático de nuevos productos en las tiendas virtuales cubanas.       
`;
        bot.sendMessage(msg.chat.id, help_message, {parse_mode: 'HTML'});
    }
}

