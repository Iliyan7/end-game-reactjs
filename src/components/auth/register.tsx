import { inject, observer } from 'mobx-react'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ROOT_STORE } from '../../constants'
import { LoginModel, RegisterModel } from '../../models/auth-models'
import { nameofFactory } from '../../shared/nameof-factory'
import RootStore, { RootStoreProp } from '../../stores/root-store'
import Breadcrumb from '../shared/breadcrumb'

type Props = {
} & RootStoreProp & RouteComponentProps

type State = {
    [key: string]: any
}

class Register extends React.Component<Props, State>  {
    constructor(props: Props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            retypePassword: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    get rootStore(): RootStore {
        return this.props.rootStore!
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { target: { name, value } } = e

        this.setState({ [name]: value })
    }

    async handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault()

        try {
            await this.rootStore.userStore.register(this.state as RegisterModel)
            await this.rootStore.userStore.login(this.state as LoginModel)
            this.props.history.push('/')
        } catch (error) {
            console.error(error)
        }
    }

    render(): React.ReactNode {
        const nameof = nameofFactory<RegisterModel>()

        return (
            <React.Fragment>
                <Breadcrumb currentPage="Register" background="/img/page-top-bg/4.jpg" />

                <section className="register-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 order-2 order-lg-1">
                                <form onSubmit={this.handleSubmit} className="contact-form">
                                    <input name={nameof('firstName')} type="text" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" />
                                    <input name={nameof('lastName')} type="text" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" />
                                    <input name={nameof('email')} type="email" value={this.state.email} onChange={this.handleChange} placeholder="E-mail" />
                                    <input name={nameof('password')} type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                    <input name={nameof('retypePassword')} type="password" value={this.state.retypePassword} onChange={this.handleChange} placeholder="Re-type password" />
                                    <button className="site-btn">Register <img src="/img/icons/double-arrow.png" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        )
    }
}

export default inject(ROOT_STORE)(observer(Register))
