import {action} from 'mobx';
import ajax from '../ajax/ajax';

class AuthStore {

    @action
    async login() {
        var data = await ajax.post('/auth/login');

        var token = data.token;
        this.storeAccessToken(token);
    }

    @action
    async register() {
        var data = await ajax.post('auth/register');
    }

    @action
    logout() {
        this.deleteAccessToken();
    }

    private getAccessToken()
    {
        return localStorage.getItem('access_token');
    }

    private storeAccessToken(token: string): void
    {
        localStorage.setItem('access_token', token);
    }

    private deleteAccessToken(): void
    {
        localStorage.removeItem('access_token');
    }

}

export default new AuthStore();