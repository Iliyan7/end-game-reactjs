import { inject, observer, PropTypes } from 'mobx-react';
import * as React from 'react';
import { LoginModel } from '../../models/AuthModels';
import { IMobxStoreProps } from '../../stores';
import Breadcrumb from '../shared/Breadcrumb';

interface Props extends IMobxStoreProps {
}

type State = {
    [key: string]: any
}

@inject('authStore')
@observer
class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    get stores() {
        return this.props as IMobxStoreProps;
    }

    handleChange(event: any) {
        const { target: { name, value } } = event

        this.setState({ [name]: value });
    }

    handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();

        this.stores.authStore.login(this.state as LoginModel)
    }

    render() {
        return (
            <React.Fragment>
                <Breadcrumb currentPage="Login" background="/img/page-top-bg/4.jpg" />

                <section className="login-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 order-2 order-lg-1">
                                <form method="post" onSubmit={this.handleSubmit} className="contact-form">
                                    <input name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="Your e-mail" />
                                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                    <button className="site-btn">Login<img src="/img/icons/double-arrow.png" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default inject((stores: any) => ({ stores: stores}))(Login);