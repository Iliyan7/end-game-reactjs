import { action, observable } from 'mobx'
import GamesStore from './games-store'
import IdentityStore from './identity-store'
import ReviewsStore from './reviews-store'
import UserStore from './user-store'

export type RootStoreProp = {
  rootStore?: RootStore
}

class RootStore {
  userStore: UserStore
  identityStore: IdentityStore
  gamesStore: GamesStore
  reviewsStore: ReviewsStore

  @observable isLoading: boolean = false

  constructor() {
    this.userStore = new UserStore(this)
    this.identityStore = new IdentityStore(this)
    this.gamesStore = new GamesStore(this)
    this.reviewsStore = new ReviewsStore(this)
  }

  @action startLoading(): void {
    this.isLoading = true
  }

  @action stopLoading(): void {
    this.isLoading = false
  }
}

export default RootStore
