import http from "../http-common";

class CrudDataService {
    login(data) {
        return http.post('/auth/login', data);
    }
    getAll() {
        return http.get("/user");
    }

    get(id) {
        return http.get(`/user/${id}`);
    }

    create(data) {
        return http.post("/user", data);
    }

    update(id, data) {
        return http.put(`/user/${id}`, data);
    }

    delete(id) {
        return http.delete(`/user/${id}`);
    }

    logout() {
        return http.post('auth/logout');
    }

    validatedToken() {
        return http.get('me');
    }
}

export default new CrudDataService();