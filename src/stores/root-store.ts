import { observable } from 'mobx';
import IdentityStore from "./identity-store";
import UserStore from "./user-store";
import GameStore from './game-stores';

export type RootStoreProp = {
  rootStore?: RootStore
}

class RootStore {
  userStore: UserStore
  identityStore: IdentityStore
  gamesStore: GameStore

  @observable isLoading: boolean = false;

  constructor() {
    this.userStore = new UserStore(this)
    this.identityStore = new IdentityStore(this)
    this.gamesStore = new GameStore(this)
  }
}

export default RootStore;
