import React from 'react'
import '../styles/SingleCard.css';
import frontImage from '../images/frontImage.gif';

function SingleCard({card, handleChoice, fliped, disabled,turns}) {

  const handleClick = ()=>{
    if(!disabled){
      handleChoice(card)
    }
  }

  return (
    <div className="card">
        <div className={fliped ? "flipped" : ""}>
              <img className="front" src={card.src} alt="card-front"></img>
              <img 
                className="back" 
                src={frontImage} 
                alt="card-back" 
                onClick={handleClick}>
              </img>
        </div>
    </div>
  )
}

export default SingleCard
