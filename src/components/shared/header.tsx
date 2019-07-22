import { inject, observer } from 'mobx-react'
import React, { SyntheticEvent } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { ROOT_STORE } from '../../constants'
import { RootStoreProp } from '../../stores/root-store'
import FollowUs from './follow-us'

type Props = {
} & RootStoreProp & RouteComponentProps

const Header = (props: Props) => {
    const isLoggedIn = props.rootStore!.identityStore.isAuthenticated
    const handleLogout = (e: SyntheticEvent) => {
        e.preventDefault()
        props.rootStore!.userStore.logout()
        props.history.push('/login')
    }

    return (
        <header className="header-section">
            <div className="header-warp">
                <div className="header-social d-flex justify-content-end">
                    <p>Follow us:</p>
                    <FollowUs />
                </div>
                <div className="header-bar-warp d-flex">
                    <a className="site-logo">
                        <img src="/img/logo.png" />
                    </a>
                    <nav className="top-nav-area w-100">
                        <div className="user-panel">
                            {isLoggedIn ?
                                <React.Fragment>
                                    <Link to="/account">Account</Link> / <a href="" onClick={handleLogout}>Logout</a>
                                </React.Fragment> :
                                <React.Fragment>
                                    <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
                                </React.Fragment>
                            }
                        </div>
                        <ul className="main-menu primary-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/games">Games</Link>
                                <ul className="sub-menu">
                                    <li><Link to="/games/1/details">Game Singel</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/reviews">Reviews</Link></li>
                            <li><Link to="/news">News</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default inject(ROOT_STORE)(observer(withRouter(Header)))
