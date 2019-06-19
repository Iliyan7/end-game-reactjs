import { action, observable } from 'mobx';
import RootStore from './root-store';

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