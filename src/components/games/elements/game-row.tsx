import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  imageUrl: string
}

const GameRow = (props: Props) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="game-item">
        <img src={props.imageUrl} alt="#" />
        <h5>{props.title}</h5>
        <Link to="games/1/details" className="read-more">
          Read More{' '}
          <img src="/img/icons/double-arrow.png" alt="#" />
        </Link>
      </div>
    </div>
  )
}

export default GameRow
