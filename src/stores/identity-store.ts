import { action, observable } from 'mobx';
import RootStore from './root-store';
import { TokenModel } from '../models/auth-models';

class IdentityStore {
  @observable id: number | null = null
  @observable firstName: string = ''
  @observable lastName: string = ''
  @observable email: string = ''
  @observable roles: string[] = []
  @observable isAuthenticated: boolean = false

  constructor(private rootStore: RootStore) {  
  }

  isInRole(role: string): boolean {
    return this.roles.includes(role);
  }

  @action
  setStore(tokenData: TokenModel): void {
    this.id = tokenData.id
    this.firstName = tokenData.firstName
    this.lastName = tokenData.lastName
    this.email = tokenData.email
    this.roles = tokenData.roles
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

export default IdentityStore;