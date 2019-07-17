import { inject, observer } from 'mobx-react'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { ROOT_STORE } from '../../constants'
import RootStore, { RootStoreProp } from '../../stores/root-store'
import Breadcrumb from '../shared/breadcrumb'
import AlphabetFilter from '../shared/filters/alphabet-filter'
import Pagination from '../shared/pagination'
import ReviewRow from './elements/review-row'

type Props = {
} & RootStoreProp & RouteComponentProps

type State = {
}

class Reviews extends React.Component<Props, State> {

  get rootStore(): RootStore {
    return this.props.rootStore!
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>

        <Breadcrumb currentPage="Reviews" background="/img/page-top-bg/2.jpg" />

        <section className="review-section">
          <div className="container">
            <AlphabetFilter />

            {this.rootStore.reviewsStore.reviews.map((r) => (
              <ReviewRow key={r.id} title={r.title} shortDescription={r.description} dateCreated={r.dateCreated} rating={r.rating} imageUrl={r.imageUrl} />
            ))}

            <Pagination numberOfPages={4} />
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default inject(ROOT_STORE)(observer(Reviews))
