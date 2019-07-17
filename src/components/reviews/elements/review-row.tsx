import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  shortDescription: string
  dateCreated: string
  rating: number
  imageUrl: string
}

const ReviewRow = (props: Props) => {
  return (
    <div className="review-item">
      <div className="row">
        <div className="col-lg-4">
          <div className="review-pic">
            <img src={props.imageUrl} />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="review-content text-box text-white">
            <div className="rating">
              <h5><i>Rating</i> <span>{props.rating}</span> / 5</h5>
            </div>
            <div className="top-meta">
              {props.dateCreated} / in <Link to="/games">Games</Link>
            </div>
            <h3>{props.title}</h3>
            <p>{props.shortDescription}</p>
            <Link to="/games/1/details" className="read-more">Read More <img src="/img/icons/double-arrow.png" /></Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ReviewRow
