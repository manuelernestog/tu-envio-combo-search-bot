module.exports = {
    get_new_products: function (products_url_list,province) {
        return products_url_list.filter(product => !activeProductsList[province].some(a_product => a_product.url == product.url))
    },
    add_product: function (product, province, store) {
        new_product = {
            url: product.url,
            province: province,
            store: store,
        }
        activeProductsList[province].push(new_product);
    },
    clean_product_list: function () {
        for (var key in activeProductsList) {
            activeProductsList[key] = [];
        }
    },
};


