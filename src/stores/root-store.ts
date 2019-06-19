import { observable } from 'mobx';
import IdentityStore from "./identity-store";
import UserStore from "./user-store";

export type RootStoreProp = {
  rootStore: RootStore
}

class RootStore {
  userStore: UserStore;
  identityStore: IdentityStore;

  @observable isLoading: boolean = false;

  constructor() {
    this.userStore = new UserStore(this)
    this.identityStore = new IdentityStore(this)
  }
}

export default RootStore;
