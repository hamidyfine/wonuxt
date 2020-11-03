import wpapi from 'wpapi';

export default ({}, inject) => {
    const wp = new wpapi({
        endpoint: `${process.env.WP_URL}/wp-json/`
    });
    inject('wp', wp);
}