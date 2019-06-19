import React from 'react'

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="container">
                <h2>Subscribe to our newsletter</h2>
                <form className="newsletter-form">
                    <input type="text" placeholder="ENTER YOUR E-MAIL" />
                    <button className="site-btn">subscribe  <img src="/img/icons/double-arrow.png" alt="#" /></button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter;