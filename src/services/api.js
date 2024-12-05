import axios from "axios";

export const api = axios.create({
    baseURL: 'https://devburgerapi.onrender.com'
});

api.interceptors.request.use((config) => {
    const userData = localStorage.getItem('devburger:userData');
    const token = userData && JSON.parse(userData).token;

    if (!config.url.startsWith('/product-file') && !config.url.startsWith('/category-file')) {
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
});
