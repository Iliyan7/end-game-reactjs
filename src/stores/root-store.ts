import { action, observable } from 'mobx'
import GameStore from './game-stores'
import IdentityStore from './identity-store'
import UserStore from './user-store'

export type RootStoreProp = {
  rootStore?: RootStore
}

class RootStore {
  userStore: UserStore
  identityStore: IdentityStore
  gamesStore: GameStore

  @observable isLoading: boolean = false

  constructor() {
    this.userStore = new UserStore(this)
    this.identityStore = new IdentityStore(this)
    this.gamesStore = new GameStore(this)
  }

  @action startLoading() {
    this.isLoading = true
  }

  @action stopLoading() {
    this.isLoading = false
  }
}

export default RootStore
