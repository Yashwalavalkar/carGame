import React from 'react'
import '../styles/Style.css';
import '../scriptsFile/script.js'
function Game() {
  return (
    
    <div className='gamecontainerImage'>
      <div className='row heading d-flex flex-wrap'>
        <div className='col-md-2'></div>
        <div className='col-md-6 d-flex header justify-content-center'>
      
        </div>
        <div className='col-md-4 d-flex justify-content-center flex-column flex-wrap '>
          <div className='d-flex score justify-content-center text-white'><h1><b>SCORE</b></h1></div>
          <div className='d-flex scoreCount justify-content-center text-white'>0</div>
        </div>
      </div>

      <div className='gameContainer'>
        <div className='car'></div>
        <div className='obstacle obstacleAni text-center text-white'><b>OBSTACLE</b></div>
      </div>

    </div>
  )
}

export default Game
