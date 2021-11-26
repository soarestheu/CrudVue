import Cookie from 'js-cookie'

export default {

    auth(to, from, next) {
        const token = Cookie.get('Crud_token');

        if (!token) {
            next('/');
        }

        next();
    },

}