export default {
    name: "MenuMixin",

    data() {
        return {
            menu: null,
        };
    },

    methods: {
        getMenus() {
            return this.$axios
                .$get(
                    `${process.env.WP_URL}/wp-json/wp-api-menus/v2/menus`
                )
                .then(response => {
                    this.menu = response.data;
                })
                .catch(error => {
                    console.log("error", error);
                });
        }
    }
};
