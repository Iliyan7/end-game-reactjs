import { action } from 'mobx'
import http from '../http/http-client'
import { LoginModel, RegisterModel, SubscribeModel } from '../models/auth-models'
import localStorageManager from '../utils/local-storage'
import RootStore from './root-store'

class UserStore {
    constructor(private rootStore: RootStore) {
    }

    private get identity() {
        return this.rootStore.identityStore
    }

    @action async login(data: LoginModel): Promise<void> {
        this.rootStore.startLoading()

        try {
            const { accessToken } = await http.post('/auth/login', data)

            this.identity.setStore(accessToken)
            localStorageManager.storeAccessToken(accessToken)

            this.rootStore.stopLoading()
        } catch (error) {
            this.rootStore.stopLoading()
            console.log(error)
        }
    }

    @action async register(data: RegisterModel): Promise<void> {
        this.rootStore.startLoading()

        try {
            await http.post('/auth/register', data)

            this.rootStore.isLoading = false
        } catch (error) {
            this.rootStore.isLoading = false
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
        this.identity.clearStore()
        localStorageManager.deleteAccessToken()
    }
}

export default UserStore
