import http from '../http/HttpClient';
import { LoginModel } from '../models/AuthModels';
import { observable, action } from 'mobx';

export class AuthStore {
    @observable public isAuthenticated: boolean = false

    @action
    public async login(data: LoginModel) {
        try {
            var res = await http.post('/auth/login', data);

            this.isAuthenticated = true;
            this.storeAccessToken(res.token);
        } catch (error) {
            return error;
        }
    }

    @action
    public async register(data: any) {
        try {
            var res = await http.post('/auth/register', data);

            this.isAuthenticated = true;
            this.storeAccessToken(res.token);
        } catch (error) {
            return error;
        }
    }

    public logout() {
        this.deleteAccessToken();
    }

    private getAccessToken() {
        return localStorage.getItem('access_token');
    }

    private storeAccessToken(token: string): void {
        localStorage.setItem('access_token', token);
    }

    private deleteAccessToken(): void {
        localStorage.removeItem('access_token');
    }

}

export default new AuthStore();