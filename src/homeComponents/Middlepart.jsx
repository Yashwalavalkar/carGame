import React from 'react'
import '../homeComponents/Style/middlepart.css';
import { Link } from 'react-router-dom';
import magic from '../magicGame/images/cardImage.jpg';
function Middlepart() {
  return (
    <div>
      <div className="row gameContainerHome">
        <Link to='/cargame'>
          <div className="className gameBox game1 img-fluid hoverImage"></div>
        </Link>
        <Link to='/tictac'>
          <div className="className gameBox game2 img-fluid hoverImage"></div>
        </Link>
        <Link to='/magicgame'>
          <div className="className gameBox game3 img-fluid hoverImage"><img src={magic}></img></div>
        </Link>
      </div>
    </div>
  )
}

export default Middlepart
