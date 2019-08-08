import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  title: string
  thumbnailUrl: string
}

const GameRow = (props: Props) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="game-item">
        <img src={props.thumbnailUrl} alt="#" />
        <h5>{props.title}</h5>
        <Link to={`games/${props.id}/details`} className="read-more">
          Read More{' '}
          <img src="/img/icons/double-arrow.png" alt="#" />
        </Link>
      </div>
    </div>
  )
}

export default GameRow
