import jwt_decode from 'jwt-decode';
import { action } from 'mobx';
import RootStore from './root-store';
import http from '../http/http-client';
import { LoginModel, RegisterModel } from '../models/auth-models';
import { JwtTokenModel } from '../models/token-models';

class UserStore {
    constructor(private rootStore: RootStore) {
    }

    private get identity() {
        return this.rootStore.identityStore;
    }

    @action async login(data: LoginModel) {
        this.rootStore.isLoading = true;
        try {
            const { accessToken } = await http.post('/auth/login', data);

            const decodedToken = jwt_decode(accessToken) as JwtTokenModel

            this.identity.id = decodedToken.id
            this.identity.email = decodedToken.email
            this.identity.roles = decodedToken.roles
            this.identity.isAuthenticated = true;

            this.storeAccessToken(accessToken);

            this.rootStore.isLoading = false
        } catch (error) {
            this.rootStore.isLoading = false
            console.log(error)
            return error
        }
    }

    @action async register(data: RegisterModel) {
        try {
            var res = await http.post('/auth/register', data);
        } catch (error) {
            return error;
        }
    }

    @action logout() {
        this.identity.clearStore();
        this.deleteAccessToken();
    }

    private getAccessToken() {
        return localStorage.getItem('accessToken');
    }

    private storeAccessToken(token: string): void {
        localStorage.setItem('accessToken', token);
    }

    private deleteAccessToken(): void {
        localStorage.removeItem('accessToken');
    }
}

export default UserStore;