const tu_envio = require('./stores/tu-envio');

module.exports = function (res) {
    switch (res.options.store_type) {
        case "tu_envio":
            tu_envio.process_response(res);
            break;
        case "5ta42":
            // code block
            break;
        case "super_facil":
            // code block
            break;
        default:
    }
}
