import { inject, observer } from 'mobx-react'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ROOT_STORE } from '../../constants'
import { RootStoreProp } from '../../stores/root-store'
import Breadcrumb from '../shared/breadcrumb'
import AlphabetFilter from '../shared/filters/alphabet-filter'
import CategoriesFilter from '../shared/filters/categories-filter'
import GenresFilter from '../shared/filters/genres-filter'
import PlatformsFilter from '../shared/filters/platforms-filter'
import GameRow from './elements/game-row'

type Props = {
} & RootStoreProp & RouteComponentProps

type State = {
}

class Games extends React.Component<Props, State> {

  get rootStore() {
    return this.props.rootStore!
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb currentPage="Games" background="/img/page-top-bg/4.jpg" />

        <section className="games-section">
          <div className="container">
            <AlphabetFilter />

            <div className="row">
              <div className="col-xl-7 col-lg-8 col-md-7">
                <div className="row">
                  {this.rootStore.gamesStore.games.map((g, i) => (
                    <GameRow key={i} title={g.title} imageUrl={g.imageUrl} />
                  ))}
                </div>
                <div className="site-pagination">
                  <a href="#" className="active">01.</a>
                  <a href="#">02.</a>
                  <a href="#">03.</a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 sidebar game-page-sideber">
                <div id="stickySidebar">

                  <CategoriesFilter list={this.rootStore.gamesStore.categories} />

                  <PlatformsFilter list={this.rootStore.gamesStore.platforms} />

                  <GenresFilter list={this.rootStore.gamesStore.genre} />

                </div>
              </div>
            </div>
          </div>
        </section>

      </React.Fragment>

    )
  }
}

export default inject(ROOT_STORE)(observer(Games))
