const tu_envio = require('./stores/tu-envio');
const quinta_y_42 = require('./stores/54-y-42');

module.exports = function (res) {
    switch (res.options.store_type) {
        case "tu_envio":
            tu_envio.process_response(res);
            break;
        case "5taY42":
            quinta_y_42.process_response(res);
            break;
        case "super_facil":
            // code block
            break;
        default:
    }
}
