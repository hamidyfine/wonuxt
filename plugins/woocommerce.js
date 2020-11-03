import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: process.env.WP_URL,
    consumerKey: process.env.WC_CK,
    consumerSecret: process.env.WC_CS,
    version: "wc/v3"
});

// export default api;

export default ({}, inject) => {
    inject('wcs', api);
}
