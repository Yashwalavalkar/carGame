import React from 'react'
import '../homeComponents/Style/middlepart.css';
import { Link } from 'react-router-dom';
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
      </div>
    </div>
  )
}

export default Middlepart
