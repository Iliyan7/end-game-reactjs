import { action, observable, onBecomeObserved } from 'mobx'
import { GameModel } from '../models/game-models'
import RootStore from './root-store'

const mockGames = [
  'Zombie Appocalipse 2', 'Dooms Day', 'The Huricane', 'Star Wars', 'Candy land', 'E.T.', 'Zombie Appocalipse 2', 'Dooms Day', 'The Huricane',
  'Ivan grozni!', 'bate qkiq'
]

class GamesStore {
  @observable games: GameModel[] = []
  @observable totalPages: number = 1

  constructor(private rootStore: RootStore) {
    this.fetchInitGames = this.fetchInitGames.bind(this)

    onBecomeObserved(this, 'games', this.fetchInitGames)
  }

  @action async fetchInitGames(): Promise<void> {
    this.rootStore.startLoading()

    try {
      // const res = await http.get('/games')
      // this.games = res

      setTimeout(() => {
        mockGames.map((g, i) => {
          if (i < 9) {
            this.games[i] = { title: g, imageUrl: `/img/games/${i + 1}.jpg` }
            this.totalPages = 3
          }
        })

        this.rootStore.stopLoading()
      }, 1000)
    } catch (error) {
      console.log(error)
      this.rootStore.stopLoading()
    }
  }

  @action async fetchGamesPerPage(page: number): Promise<void> {
    this.rootStore.startLoading()

    try {
      setTimeout(() => {
        const tempGames: GameModel[] = []
        let item = 0
        for (let i = 0; i < 9; i++) {
          const offset = (page - 1) * 9
          if (!mockGames[offset + i]) { break }

          tempGames[item++] = { title: mockGames[offset + i], imageUrl: `/img/games/${i % 9 + 1}.jpg` }
        }

        this.games = tempGames

        this.rootStore.stopLoading()
      }, 1000)
    } catch (error) {
      console.log(error)
      this.rootStore.stopLoading()
    }
  }

  get categories(): string[] {
    return ['Games', 'Gaming Tips & Tricks', 'Online Games', 'Team Games', 'Community', 'Uncategorized']
  }

  get platforms(): string[] {
    return ['Xbox', 'X box 360', 'Play Station', 'Play Station VR', 'Nintendo Wii']
  }

  get genre(): string[] {
    return ['Online', 'Adventure', 'S.F.', 'Strategy', 'Racing', 'Shooter']
  }
}

export default GamesStore
