import { action, observable, onBecomeObserved } from 'mobx'
import { ReviewModel } from '../models/review-models'
import RootStore from './root-store'

const mockReviews = [
  { title: 'Zombie Appocalipse 2', rating: 4.5, date: '11.11.18' },
  { title: 'Hounted Mansion 3', rating: 4.5, date: '11.11.18' },
  { title: 'Shooting Stuff', rating: 3.5, date: '11.11.18' },
  { title: 'Zombie War Nation 1', rating: 3.5, date: '11.11.18' },
  { title: 'Jams’e Island 3', rating: 2.5, date: '11.11.18' }
]

const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Vivamus volutpat nibh ac sollicitudin imperdiet. Donec scelerisque lorem sodales odio ultricies, nec rhoncus ex lobortis. Vivamus tincidunt sit amet sem id varius. Donec elementum aliquet tortor. Curabitur justo mi, efficitur sed eros aliquealiqua.....'

class ReviewsStore {
  @observable reviews: ReviewModel[] = []
  @observable totalPages: number = 1

  constructor(private rootStore: RootStore) {
    this.fetchInitReviews = this.fetchInitReviews.bind(this)

    onBecomeObserved(this, 'reviews', this.fetchInitReviews)
  }

  @action async fetchInitReviews(): Promise<void> {
    this.rootStore.startLoading()

    try {
      // const res = await http.get('/games')
      // this.games = res

      setTimeout(() => {
        mockReviews.map((g, i) => {
          if (i < 5) {
            this.reviews[i] = { id: i, title: g.title, description: desc, imageUrl: `/img/games/${i + 1}.jpg`, rating: g.rating, dateCreated: g.date }
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
}

export default ReviewsStore
