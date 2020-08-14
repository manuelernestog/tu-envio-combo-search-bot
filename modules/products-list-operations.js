const moment = require('moment');

module.exports = {
    get_new_products: function (products_url_list, province) {
        return products_url_list.filter(product => !activeProductsList[province].some(a_product => a_product.url == product.url))
    },
    add_product: function (product, province, store) {
        new_product = {
            url: product.url,
            province: province,
            store: store,
            sighting_time: moment().format(),
        }
        activeProductsList[province].push(new_product);
    },
    clean_old_products: function (products_url_list, province) {
        for (var i in activeProductsList[province]) {
            if (moment(activeProductsList[province][i].sighting_time) < moment().subtract(10, 'm')) {
                if (!products_url_list.some(product => a_product == activeProductsList[province][i].url)) {
                    activeProductsList[province].splice(i, 1);
                }else {
                    activeProductsList[province][i].sighting_time = moment().format();
                }
            }
        }
    },
    get_new_products: function (products_url_list, province) {
        return products_url_list.filter(product => !activeProductsList[province].some(a_product => a_product.url == product.url))
    },
};


