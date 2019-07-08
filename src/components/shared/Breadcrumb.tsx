import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  currentPage: string
  background: string
}

const Breadcrumb = (props: Props) => {
  return (
    <section className="page-top-section set-bg" style={{ backgroundImage: `url('${props.background}')` }}>
      <div className="page-info">
        <h2>{props.currentPage}</h2>
        <div className="site-breadcrumb">
          <Link to="/">Home</Link> /
          <span>{props.currentPage}</span>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
