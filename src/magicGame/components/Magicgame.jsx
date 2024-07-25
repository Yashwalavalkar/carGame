import React, { useEffect, useState } from "react";
import "../styles/style.css";

import firstImage from '../images/firstImage.jpg';
import secondImage from '../images/secondImage.webp';
import thirdImage from '../images/thirdImage.jpg';
import fourthImage from '../images/fourthImage.jpg';
import fifthImage from '../images/fifthImage.jpg';
import sixthImage from '../images/sixImage.webp';
import seventhImage from '../images/seventhImage.jpg';
import eightImage from '../images/eightImage.jpg';
import ninethImage from '../images/nineImage.jpg';
import tenthImage from '../images/tenImage.jpg';
import SingleCard from "./SingleCard";

  let cardImages =[
    {"src":firstImage, matched: false},
    {"src":secondImage, matched: false},
    {"src":thirdImage, matched: false},
    {"src":fourthImage, matched: false},
    {"src":fifthImage, matched: false},
    {"src":sixthImage, matched: false},
    {"src":seventhImage, matched: false},
    {"src":eightImage, matched: false},
    {"src":ninethImage, matched: false},
    {"src":tenthImage, matched: false}
  ]

function Magicgame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle the cards
  const shuffleCards = () =>{
    const shuffledCards = [...cardImages,...cardImages].sort(()=>Math.random() - 0.5).map((card)=>({...card,id: Math.random()}))

    setCards(shuffledCards);
    setTurns(0);
  }

  const handleChoice = (card) =>{
    choice1 ? setChoice2(card) : setChoice1(card);
  }

  useEffect(()=>{
    if(choice1 && choice2){
      if(choice1.src === choice2.src){
        setDisabled(true);
        setCards(prevCard =>{
          return prevCard.map(card =>{
            if(card.src === choice1.src){
              return {...card, matched: true}
            }else{
              return card;
            }
          })
        })
        resetTurn();
      }else{
        setTimeout(()=>{
          resetTurn();
        },1000);
      }
    }
  },[choice1, choice2])

  const resetTurn = () =>{
    setChoice1(null);
    setChoice2(null);
    setTurns((prevTurn) => prevTurn +1);
    setDisabled(false);
  }
  return (
    <div className="App">
      <h1 className=""><b>CARD GAME</b></h1>
      <button className="" onClick={shuffleCards}>New Game</button>

      <div className="card-grid bg-dark">
        {cards.map((card)=>(
          <SingleCard 
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
            fliped={card === choice1 || card === choice2 || card.matched}
            disabled={disabled}
            turns={turns}
            />
        ))}
      </div>

      <div>
          <p>{turns}</p>
        </div>
    </div>
  );
}

export default Magicgame;
