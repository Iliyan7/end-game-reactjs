import jwt_decode from 'jwt-decode'
import { action, computed, observable } from 'mobx'
import { TokenModel } from '../models/auth-models'
import localStorageManager from '../utils/local-storage'
import RootStore from './root-store'

class IdentityStore {
  @observable id: number = 0
  @observable firstName: string = ''
  @observable lastName: string = ''
  @observable email: string = ''
  @observable roles: string[] = []
  @observable isAuthenticated: boolean = false

  constructor(private rootStore: RootStore) {
    const accessToken = localStorageManager.getAccessToken()

    if (accessToken) {
      this.setStore(accessToken)
    }
  }

  isInRole(role: string): boolean {
    return this.roles.includes(role)
  }

  @action
  setStore(accessToken: string): void {
    const decodedToken = jwt_decode(accessToken) as TokenModel

    this.id = decodedToken.id
    this.firstName = decodedToken.firstName
    this.lastName = decodedToken.firstName
    this.email =  decodedToken.email
    this.roles = decodedToken.roles
    this.isAuthenticated = true
  }

  @action
  clearStore(): void {
    this.id = 0
    this.firstName = ''
    this.lastName = ''
    this.email = ''
    this.roles = []
    this.isAuthenticated = false
  }
}

export default IdentityStore
