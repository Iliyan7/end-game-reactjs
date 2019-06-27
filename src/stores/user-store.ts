import jwt_decode from 'jwt-decode';
import { action } from 'mobx';
import http from '../http/http-client';
import { LoginModel, RegisterModel, SubscribeModel, TokenModel } from '../models/auth-models';
import RootStore from './root-store';

class UserStore {
    constructor(private rootStore: RootStore) {
    }

    private get identity() {
        return this.rootStore.identityStore;
    }

    @action async login(data: LoginModel) {
        this.rootStore.isLoading = true;
        try {
            const { accessToken } = await http.post('/auth/login', data)
            const decodedToken = jwt_decode(accessToken) as TokenModel
            this.identity.setStore(decodedToken)
            this.storeAccessToken(accessToken)

            this.rootStore.isLoading = false
        } catch (error) {
            this.rootStore.isLoading = false
            console.log(error)
            return error
        }
    }

    @action async register(data: RegisterModel): Promise<void> {
        try {
            const res = await http.post('/auth/register', data);
        } catch (error) {
            console.log(error)
        }
    }

    @action async subscribeToNewsletter(data: SubscribeModel): Promise<void> {
        try {
            await http.post('/users/subscribe', data)
        } catch (error) {
            console.log(error)
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