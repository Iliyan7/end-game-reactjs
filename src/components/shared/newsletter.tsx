import { inject, observer } from 'mobx-react'
import React, { ChangeEvent } from 'react'
import { ROOT_STORE } from '../../constants'
import { SubscribeModel } from '../../models/auth-models'
import RootStore, { RootStoreProp } from '../../stores/root-store'

type Props = {
} & RootStoreProp

type State = {
    [key: string]: any
}

class Newsletter extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            email: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    get rootStore(): RootStore {
        return this.props.rootStore!
    }

    handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const { target: { name, value } } = event

        this.setState({ [name]: value })
    }

    handleSubmit(e: React.SyntheticEvent): void {
        e.preventDefault()

        this.rootStore.userStore.subscribeToNewsletter(this.state as SubscribeModel)
    }

    render(): React.ReactNode {
        return (
            <section className="newsletter-section">
                <div className="container">
                    <h2>Subscribe to our newsletter</h2>
                    <form className="newsletter-form" onSubmit={this.handleSubmit}>
                        <input name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="ENTER YOUR E-MAIL" />
                        <button className="site-btn">subscribe  <img src="/img/icons/double-arrow.png" alt="#" /></button>
                    </form>
                </div>
            </section>
        )
    }
}

export default inject(ROOT_STORE)(observer(Newsletter))
