import { inject, observer } from 'mobx-react'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { ROOT_STORE } from '../../constants'
import { RootStoreProp } from '../../stores/root-store'
import Breadcrumb from '../shared/breadcrumb'

type State = {
  [x: string]: any
}

type Props = {
} & RootStoreProp & RouteComponentProps

class Contact extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = e.target

    this.setState({[name]: value })
  }

  async handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    console.log('contact submited')
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <Breadcrumb currentPage="Contact" background="/img/page-top-bg/4.jpg"/>

        <section className="contact-page">
          <div className="container">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
            <div className="row">
              <div className="col-lg-7 order-2 order-lg-1">
                <form onSubmit={this.handleSubmit.bind(this)} className="contact-form">
                  <input name="name" type="text" placeholder="Your name" value={this.state.name} onChange={this.handleChange.bind(this)} />
                  <input name="email" type="text" placeholder="Your e-mail" value={this.state.email} onChange={this.handleChange.bind(this)} />
                  <input name="subject" type="text" placeholder="Subject" value={this.state.subject} onChange={this.handleChange.bind(this)} />
                  <textarea name="message" placeholder="Message" value={this.state.message} onChange={this.handleChange.bind(this)} />
                  <button className="site-btn">
                    Send message <img src="/img/icons/double-arrow.png"alt="#"/>
                  </button>
                </form>
              </div>
              <div className="col-lg-5 order-1 order-lg-2 contact-text text-white">
                <h3>Howdy! Say hello</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.....
                 </p>
                <div className="cont-info">
                  <div className="ci-icon"><img src="/img/icons/location.png" /></div>
                  <div className="ci-text">Main Str, no 23, New York</div>
                </div>
                <div className="cont-info">
                  <div className="ci-icon"><img src="/img/icons/phone.png" /></div>
                  <div className="ci-text">+546 990221 123</div>
                </div>
                <div className="cont-info">
                  <div className="ci-icon"><img src="/img/icons/mail.png" /></div>
                  <div className="ci-text">contact@end-game.com</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>

    )
  }
}

export default inject(ROOT_STORE)(observer(Contact))
