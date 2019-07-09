import { action, observable, onBecomeObserved } from 'mobx'
import { GameModel } from '../models/game-models'
import RootStore from './root-store'

const mockGames = [
  'Zombie Appocalipse 2', 'Dooms Day', 'The Huricane',
  'Star Wars', 'Candy land', 'E.T.',
  'Zombie Appocalipse 2', 'Dooms Day', 'The Huricane'
]

class GameStore {

  @observable games: GameModel[] = []

  constructor(private rootStore: RootStore) {
    this.fetchGames = this.fetchGames.bind(this)

    onBecomeObserved(this, 'games', this.fetchGames)
  }

  @action async fetchGames() {
    this.rootStore.startLoading()

    try {
      // const res = await http.get('/games')
      // this.games = res

      setTimeout(() => {
        mockGames.map((g, i) => {
          this.games[i] = { title: g, imageUrl: `/img/games/${i + 1}.jpg` }
        })

        this.rootStore.stopLoading()
      }, 3000)
    } catch (error) {
      console.log(error)
      this.rootStore.stopLoading()
    }
  }

  get categories() {
    return ['Games', 'Gaming Tips & Tricks', 'Online Games', 'Team Games', 'Community', 'Uncategorized']
  }

  get platforms() {
    return ['Xbox', 'X box 360', 'Play Station', 'Play Station VR', 'Nintendo Wii']
  }

  get genre() {
    return ['Online', 'Adventure', 'S.F.', 'Strategy', 'Racing', 'Shooter']
  }
}

export default GameStore
