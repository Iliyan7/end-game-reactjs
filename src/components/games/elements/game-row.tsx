import React from 'react'
import { type } from 'os';

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
        <a href="game-single.html" className="read-more">
          Read More{" "}
          <img src="/img/icons/double-arrow.png" alt="#" />
        </a>
      </div>
    </div>
  )
}

export default GameRow;