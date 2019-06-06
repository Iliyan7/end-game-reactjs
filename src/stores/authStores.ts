import http from '../http/HttpClient';

class AuthStore {
    async login() {
        const body = {
            email: 'admin@mail.com',
            password: '123456'
        }

        try {
            var data = await http.post('/auth/login', body);

            var token = data.token;
            this.storeAccessToken(token);
        } catch (error) {
            
        }
    }

    async register() {
        try {
            var data = await http.post('auth/register', { });
        } catch (error) {
            
        }
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