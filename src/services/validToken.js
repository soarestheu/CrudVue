import CrudDataService from './CrudDataService';

class Token {
    checkToken(to, from, next) {
        CrudDataService.validatedToken()
            .then(response => {
                var verifyToken = response.data;
                if (verifyToken.status == "Token is Invalid") {
                    next('/');
                } else {
                    next();
                }

            }).catch(e => {
                console.log(e);
            });
    }
}

export default new Token();