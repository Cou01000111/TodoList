import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        dark: true,
        themes: {
            light: {
                primary: '#9b82e0',
                accent: '#616161',
            },
            dark: {
                primary: '#9b82e0',
                accent: '#616161',
            },
        },
    },
});
