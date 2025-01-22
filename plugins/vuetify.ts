import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'dark',
            themes: {
                light: {
                    dark: false,
                    colors: {
                        background: '#FFFFFF',
                        surface: '#FFFFFF',
                        primary: '#1976D2',
                        secondary: '#424242',
                        accent: '#82B1FF',
                        error: '#FF5252',
                        info: '#2196F3',
                        success: '#4CAF50',
                        warning: '#FFC107',
                    },
                    variables: {
                        fontFamily: 'Open Sans, sans-serif',
                    },
                },
                dark: {
                    dark: true,
                    colors: {
                        background: '#121212',
                        surface: '#121212',
                        primary: '#BB86FC',
                        secondary: '#03DAC6',
                        accent: '#03DAC6',
                        error: '#CF6679',
                        info: '#2196F3',
                        success: '#4CAF50',
                        warning: '#FFC107',
                    },
                    variables: {
                        fontFamily: 'Open Sans, sans-serif',
                    },
                },
            },
        },
        icons: {
            defaultSet: 'mdi',
        },
    });
    nuxtApp.vueApp.use(vuetify);
});