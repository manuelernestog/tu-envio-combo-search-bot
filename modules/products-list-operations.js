module.exports = {
    get_new_products: function (products_url_list,province) {
        return products_url_list.filter(url => !activeProductsList[province].some(product => product.url == url))
    },
    add_product: function (url, province, store) {
        new_product = {
            url: url,
            province: province,
            store: store,
        }
        activeProductsList[province].push(new_product);
    },
};


