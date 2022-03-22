import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data }) => {
  return (
    <div className="col col-md-3  mb-4">
      <div className="card h-100 text-center" style={{ width: '18rem' }}>
        <img
          src={data.provider[0].image.thumbnail.contentUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.description.substring(0, 30)}...</p>
          <Link to={`/details/${data.name}`} className="btn btn-primary mb-3">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
