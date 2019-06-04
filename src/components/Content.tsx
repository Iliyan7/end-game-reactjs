import React from "react";
import { Route, Switch } from "react-router";
import Home from "./home/Home";
import Games from "./games/Games";
import GameDetails from "./game-details/GameDetails";
import Reviews from "./reviews/Reviews";
import News from "./news/News";
import Login from "./auth/Login";
import Contact from "./contact/Contact";
import Register from "./auth/Register";
import Newsletter from "./shared/Newsletter";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

class Content extends React.Component<any> {
    render() {
        const baseUrl = this.props.match.path
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path={baseUrl} component={Home} />
                    <Route exact path={baseUrl + '/games'} component={Games} />
                    <Route exact path='/v1/games/:id/details' component={GameDetails} />
                    <Route exact path='/v1/reviews' component={Reviews} />
                    <Route exact path='/v1/news' component={News} />
                    <Route exact path='/v1/contact' component={Contact} />
                    <Route exact path='/v1/login' component={Login} />
                    <Route exact path='/v1/register' component={Register} />
                </Switch>
                <Newsletter />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Content;