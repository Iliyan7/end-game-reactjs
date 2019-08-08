import { TOKEN } from '../constants'

class LocalStorageManager {
  private static instance: LocalStorageManager

    static get getInstance(): LocalStorageManager {
        return this.instance || (this.instance = new this())
    }

  getAccessToken(): string | null {
    return localStorage.getItem(TOKEN)
  }

  storeAccessToken(token: string): void {
    localStorage.setItem(TOKEN, token)
  }

  deleteAccessToken(): void {
    localStorage.removeItem(TOKEN)
  }
}

export default LocalStorageManager.getInstance
