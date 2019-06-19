import React from 'react'
import '../../styles/server-error.css'


class ServerError extends React.Component {

  componentDidMount() {
    document.querySelector('body')!.style.cssText = 'background: #eaeaea;'

    setTimeout(function () {
      const load = document.querySelector("section.loading");
  
      if (load) {
        load.classList.remove('loading');
      }
    }, 1000);
  }

  render() {
    return (
      <section className="server-error loading">
        <h1>500</h1>
        <h2>Unexpected Error <b>:(</b></h2>
        <div className="gears">
          <div className="gear one">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="gear two">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="gear three">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </section>
    )
  }
}

export default ServerError;