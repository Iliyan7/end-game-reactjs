import ajax from '../ajax/ajax';

class AuthStore {
    async login() {
        var data = await ajax.post('/auth/login');

        var token = data.token;
        this.storeAccessToken(token);
    }

    async register() {
        var data = await ajax.post('auth/register');
    }

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