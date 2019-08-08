import { action, observable, onBecomeObserved } from 'mobx'
import http from '../http/http-client'
import { GameModel } from '../models/game-models'
import RootStore from './root-store'

class GamesStore {
  @observable games: GameModel[] = []
  @observable totalPages: number = 2

  constructor(private rootStore: RootStore) {
    this.fetchInitGames = this.fetchInitGames.bind(this)

    onBecomeObserved(this, 'games', this.fetchInitGames)
  }

  @action async fetchInitGames(): Promise<void> {
    this.rootStore.startLoading()

    try {
      const res = await http.get('/games')
      res.result.map((g: GameModel) => {
        this.games.push({
          id: g.id,
          title: g.title,
          thumbnailUrl: g.thumbnailUrl
        })
      })
      this.totalPages = res.totalPages

      this.rootStore.stopLoading()
    } catch (error) {
      console.log(error)
      this.rootStore.stopLoading()
    }
  }

  @action async fetchGamesPerPage(page: number): Promise<void> {
    this.rootStore.startLoading()

    try {
      const res = await http.get('/games', { params: { pageIndex: page.toString() } })
      this.games = res.result

      this.rootStore.stopLoading()
    } catch (error) {
      console.log(error)
      this.rootStore.stopLoading()
    }
  }

  get platforms(): string[] {
    return ['Xbox', 'X box 360', 'Play Station', 'Play Station VR', 'Nintendo Wii']
  }

  get genre(): string[] {
    return ['Online', 'Adventure', 'S.F.', 'Strategy', 'Racing', 'Shooter']
  }
}

export default GamesStore
