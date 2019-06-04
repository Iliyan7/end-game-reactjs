import * as React from 'react';
import Breadcrumb from '../shared/Breadcrumb';

interface Props {
}

interface State {
    [key: string]: any
}

class Register extends React.Component<Props, State>  {

    constructor(props: Props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            retypePassword: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const { target: { name, value } } = event

        this.setState({ [name]: value });
    }

    handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>

                <Breadcrumb currentPage="Register" background="img/page-top-bg/4.jpg" />

                <section className="register-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 order-2 order-lg-1">
                                <form method="post" className="contact-form">
                                    <input name="first-name" type="text" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" />
                                    <input name="last-name" type="text" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" />
                                    <input name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="E-mail" />
                                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                    <input name="retype-password" type="password" value={this.state.retypePassword} onChange={this.handleChange} placeholder="Re-type password" />
                                    <button className="site-btn">Register<img src="img/icons/double-arrow.png" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        );
    }
}

export default Register;