import React from "react";
import './Card.scss';

interface props {
  imageUrl: string,
  imageAlt: string,
  cardName: string,
  cardDescription: string,
}

const Card = ({
  imageUrl,
  imageAlt,
  cardName,
  cardDescription,
} : props) => {
  return (
    <article className="card">
      <div className="cardImage" style={{backgroundImage: `url(${imageUrl})`}}>
        <img className="cardImg" src={imageUrl} alt={imageAlt} />
      </div>
      <hr />
      <div className="cardContent">
        <h3>{cardName}</h3>
        <p>{cardDescription}</p>
      </div>
    </article>
  )
}

export default Card;