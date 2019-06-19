import { inject, observer } from 'mobx-react';
import React from 'react';
import { Route, Switch } from 'react-router';
import Login from "./auth/login";
import Register from "./auth/register";
import Contact from "./contact/contact";
import GameDetails from "./game-details/game-details";
import Games from "./games/games";
import Home from "./home/home";
import News from "./news/news";
import Reviews from "./reviews/reviews";
import Footer from "./shared/footer";
import Header from "./shared/header";
import Loader from "./shared/loader";
import Newsletter from "./shared/newsletter";

@inject('rootStore')
@observer
class Content extends React.Component<any> {
    render() {
        const baseUrl = this.props.match.path
        return (
            <React.Fragment>
                {this.props.rootStore.isLoading &&
                    <Loader />
                }
                <Header />
                <Switch>
                    <Route exact path={baseUrl} component={Home} />
                    <Route exact path={`${baseUrl}/games`} component={Games} />
                    <Route exact path={`${baseUrl}/games/:id/details`} component={GameDetails} />
                    <Route exact path={`${baseUrl}/reviews`} component={Reviews} />
                    <Route exact path={`${baseUrl}/news`} component={News} />
                    <Route exact path={`${baseUrl}/contact`} component={Contact} />
                    <Route exact path={`${baseUrl}/login`} component={Login} />
                    <Route exact path={`${baseUrl}/register`} component={Register} />
                </Switch>
                <Newsletter />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Content;