import { observable, onBecomeObserved } from "mobx";
import http from '../http/http-client';
import { GameModel } from "../models/game-models";
import RootStore from "./root-store";

class GameStore {

  @observable games: GameModel[] = []

  constructor(private rootStore: RootStore) {

    this.fetchGames = this.fetchGames.bind(this)

    onBecomeObserved(this, 'games', this.fetchGames)
  }

  async fetchGames() {
    try {
      const res = await http.get('/games');
      this.games = res;
    } catch (error) {
      
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

export default GameStore;