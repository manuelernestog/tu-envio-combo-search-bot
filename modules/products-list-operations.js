module.exports = {
    add_product: function (product, province, store) {
        new_product = {url: product.url, province: province, store: store}
        activeProductsList[province].push(new_product);
    },

    get_new_products: function (products_list, province) {
        return products_list.filter(product => !activeProductsList[province].some(a_product => a_product.url == product.url))
    },

    clean_old_products: function (products_list, province, store) {
        for (var i = activeProductsList[province].length - 1; i >= 0; i--) {
            if (activeProductsList[province][i].store == store){
                if (!products_list.some(product => product.url == activeProductsList[province][i].url)) {
                    activeProductsList[province].splice(i, 1);
                }
            }
        }
    }
};


