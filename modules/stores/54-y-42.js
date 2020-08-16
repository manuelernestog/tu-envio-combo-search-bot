// {
//     "base_url": "https://5tay42.enzona.net/",
//     "url_end": "",
//     "page_type": "product_list",
//     "store": "5ta y 42",
//     "province": "habana"
// }

function craw_product_list_page(page, base_url) {
    let products_list = [];
    page("#blocknewproducts li ").each(function (i, elem) {
        const product_url = $(this).find("a.product-name").attr('href');
        products_list.push({url: product_url, img: null});
    });
    return products_list;
}

function process_product_response(res) {
    if (product_is_available(res)) {
            console.log('Publicando nuevo producto ' + res.options.uri);
            let product = get_product_info(res);
            let message = create_message(product, res);
            if (send_picture) {
                download_image(product.img,
                    () => {
                        bot_module.send_img_message(message, product)
                    }, () => {
                        bot_module.send_product_message(message, product)
                    });
            } else {
                bot_module.send_product_message(message, product);
            }
        }
}

function product_is_available(res) {
    console.log(res.$("#availability_value").text());
    const unavailability_message = 'Este producto ya no está disponible';
    return res.$("#availability_value").text() == unavailability_message ? false : true;
}

function get_product_info(res) {
    var product = {
        title: res.$("h1[itemprop=\'name\']").text() || "Kit Mixto",
        price: res.$('#our_price_display').text(),
        store: res.options.store,
        img: res.$('#bigpic').attr('src'),
        description: res.$('#short_description_content').text(),
        province: res.options.province,
        url: res.options.uri
    }
    return product;
}

function create_message(product, res) {
    let message = [];
    message.push("\u{1F6CD}" + ` <b>${product.title}</b> \n`);
    message.push("\u{1F4B0}" + ` ${product.price} \n`);
    message.push("\u{1F3EA}" + ` ${product.store} \n`);
    message.push("-----------------------------------------------\n");
    message.push(`${product.description} \n`);
    message.push("-----------------------------------------------\n");
    message.push("Publicado por @TuEnvioComboSearchBot");
    return message.join('');
}