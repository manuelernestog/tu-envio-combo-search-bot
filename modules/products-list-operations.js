const moment = require('moment');

module.exports = {
    add_product: function (product, province, store) {
        new_product = {url: product.url, province: province, store: store,}
        activeProductsList[province].push(new_product);
    },
    get_new_products: function (products_url_list, province) {
        return products_url_list.filter(product => !activeProductsList[province].some(a_product => a_product.url == product.url))
    },
    clean_old_products: function (products_url_list, province) {
        for (var i = activeProductsList[province].length - 1; i >= 0; i--) {
            !products_url_list.some(url => url == activeProductsList[province][i].url) && activeProductsList[province].splice(i, 1);
        }
    }
};


