// {
//     "base_url": "https://5tay42.enzona.net/",
//     "url_end": "",
//     "page_type": "product_list",
//     "store_type": "5taY42",
//     "store": "5ta y 42",
//     "province": "habana"
// }

const $ = require('cheerio');
const bot_module = require('../bot-module');
const product_list_operations = require('../products-list-operations')
const download_image = require('../download-image-module')
const send_picture = false;

exports.process_response = function (res) {
    if (res.options.page_type == "product_list") {
        console.log('Revisando ' + res.options.store);
        process_product_list_response(res);
    } else {
        process_product_response(res);
    }
}

function process_product_list_response(res) {
    var opt = res.options;
    const page_products_list = craw_product_list_page(res.$, opt.base_url);
    product_list_operations.clean_old_products(page_products_list, opt.province);
    const new_products_url_list = product_list_operations.get_new_products(page_products_list, opt.province);
    new_products_url_list.forEach(function (product) {
            product_list_operations.add_product(product, opt.province, opt.store);
            opt.img = product.img;
            create_url_request(product.url, opt);
        }
    );
}

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

function create_url_request(url, opt) {
    craw.queue({
        uri: url,
        page_type: "product",
        store_type: opt.store_type,
        province: opt.province,
        store: opt.store,
        base_url: opt.base_url,
        img: opt.img
    });
}