import { Provider } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './components/auth/login'
import Register from './components/auth/register'
import Contact from './components/contact'
import NotFound from './components/errors/not-found'
import ServerError from './components/errors/server-error'
import GameDetails from './components/game-details/game-details'
import Games from './components/games'
import Home from './components/home'
import News from './components/news'
import Reviews from './components/reviews'
import Footer from './components/shared/footer'
import Header from './components/shared/header'
import Loader from './components/shared/loader'
import Newsletter from './components/shared/newsletter'
import RootStore from './stores/root-store'
import './styles/styles.css'

const ContentRoute = ({ component: ContentComponent, ...rest }: any) => (
    <Route {...rest} render={(props) => (
        <React.Fragment>
            <Loader />
            <Header />
            <ContentComponent {...props} />
            <Newsletter />
            <Footer />
        </React.Fragment>
    )} />
)

ReactDOM.render((
    <Provider rootStore={new RootStore()} >
        <HashRouter>
            <Switch>
                <ContentRoute exact path="/" component={Home} />
                <ContentRoute exact path="/games" component={Games} />
                <ContentRoute exact path="/games/:id/details" component={GameDetails} />
                <ContentRoute exact path="/reviews" component={Reviews} />
                <ContentRoute exact path="/news" component={News} />
                <ContentRoute exact path="/contact" component={Contact} />
                <ContentRoute exact path="/login" component={Login} />
                <ContentRoute exact path="/register" component={Register} />
                <Route exact path="/500" component={ServerError} />
                <Route component={NotFound} />
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'))
