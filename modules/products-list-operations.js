module.exports = {
    get_new_products: function (products_url_list) {
        return products_url_list.filter(url => !activeProductsList.some(product => product.url == url))
    },

    remove_old_products: function (products_url_list, store) {
        for (i = 0; i < activeProductsList.length; i++) {
            if (activeProductsList[i].store == store) {
                if (!products_url_list.some(url => url == activeProductsList[i].url)) {
                    product = activeProductsList.splice(i, 1);
                    i--;
                }
            }
        }
    },

    add_product: function (url, province, store) {
        new_product = {
            url: url,
            province: province,
            store: store,
        }
        product_index = activeProductsList.length
        activeProductsList.push(new_product);
    },
};


