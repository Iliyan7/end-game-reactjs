import * as React from 'react';
import { Link } from "react-router-dom";

interface Props {
  currentPage: string
}

class Breadcrumb extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <section className="page-top-section set-bg" style={{backgroundImage: 'url("img/page-top-bg/4.jpg")'}}>
        <div className="page-info">
          <h2>Contact</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
                <span>{this.props.currentPage}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Breadcrumb;