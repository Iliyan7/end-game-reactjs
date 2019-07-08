import { inject, observer } from 'mobx-react'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ROOT_STORE } from '../../constants'
import { LoginModel } from '../../models/auth-models'
import { nameofFactory } from '../../shared/nameof-factory'
import { RootStoreProp } from '../../stores/root-store'
import Breadcrumb from '../shared/breadcrumb'
import Header from '../shared/header'

type Props = {
} & RootStoreProp & RouteComponentProps

type State = {
    [key: string]: any
}

class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    get rootStore() {
        return this.props.rootStore!
    }

    handleChange(event: any) {
        const { target: { name, value } } = event

        this.setState({ [name]: value })
    }

    handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()

        this.rootStore.userStore.login(this.state as LoginModel)
    }

    render() {
        const nameof = nameofFactory<LoginModel>()

        return (
            <React.Fragment>
                <Header />
                <Breadcrumb currentPage="Login" background="/img/page-top-bg/4.jpg" />

                <section className="login-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 order-2 order-lg-1">
                                <form onSubmit={this.handleSubmit} className="contact-form">
                                    <input name={nameof('email')} type="text" value={this.state.email} onChange={this.handleChange} placeholder="Your e-mail" />
                                    <input name={nameof('password')} type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                    <button className="site-btn">Login <img src="/img/icons/double-arrow.png" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default inject(ROOT_STORE)(observer(Login))
