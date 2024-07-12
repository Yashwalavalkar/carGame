import React, { useRef, useState } from 'react'
import '../style/Tictacktoa.css'
import circle from '../Images/circle.gif';
import cross from '../Images/cross.gif';

    let data = ["","","","","","","","",""];
    function Ticktactoa() {

    let [count,setCount] =useState(0);
    let [lock,setLock] = useState(false);
        let box1 = useRef(null);
        let box2 = useRef(null);
        let box3 = useRef(null);
        let box4 = useRef(null);
        let box5 = useRef(null);
        let box6 = useRef(null);
        let box7 = useRef(null);
        let box8 = useRef(null);
        let box9 = useRef(null);
        let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]


    const toggle = (e,num) =>{
        
        if(lock){
            return 0;
        }
        if(count % 2 === 0){
            e.target.innerHTML = "<img src='" + cross + "' alt='cross' className='img-fluid crossImage' style='height: 110px;width:110px'border:2px solid red'/>";
            data[num] = "x"
            e.target.classList.add("disabled")
            e.target.classList.remove("enabled")
            setCount(count + 1);
            
        }else{
            e.target.innerHTML = "<img src='" + circle + "' alt='cross' className='img-fluid'style='height: 110px;width:110px'border:2px solid red'/>";
            e.target.onClick = null;
            data[num] = "o"
            e.target.classList.add("disabled");
            e.target.classList.remove("enabled")
            setCount(count + 1);
        }   

        if(data[0] === data[1] && data[1] === data[2] && data[2] !== "" || data[0] === data[3] && data[3] === data[6] && data[6] !== "" || data[0] === data[4] && data[4] === data[8] && data[8] !== ""){
            won(data[0])
        }else if(data[3] === data[4] && data[4] === data[5] && data[5] !== "" || data[1] === data[4] && data[4] === data[7] && data[7] !== ""){
            won(data[4])
        }else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){
            won(data[6])
        }else if(data[2] === data[5] && data[5] === data[8] && data[8] !== "" || data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
            won(data[2])
        }

    }
    function won(data){
        let title = document.querySelector('.title')
        if(data === "x"){
            title.innerHTML = `<img src="${cross}" className='img-fluid' style='height: 25px;width:78px'border:2px solid red'"/> Wins The game`
        }else{
            title.innerHTML = `<img src="${circle}" className='img-fluid' style='height: 26px;width:30px'border:2px solid red'"/> Wins The game`
        }
        setLock(true);
    }

    function restartGame(){
        data = ["","","","","","","","",""];
        setLock(false);
        let title = document.querySelector('.title');
        title.innerHTML = "<h5 className='title'>TIC TAC TOE <span>GAME</span></h5>"
        box_array.map((e)=>{
            e.current.innerHTML = "";
            e.current.classList.add("enabled")
        })
    }
  return (
    <div>
        <div className="containerY">
            <div className="row heading">
                <div className=" col-3 col-sm-3"></div>
                <div className=" col -6 col-sm-6 d-flex justify-content-center p-3">
                    <h1 className='title'>TIC TAC TOE <span>GAME</span></h1>
                </div>
                <div className=" col-3 col-sm-3"></div>
            </div>

            <div className="container board d-flex flex-wrap">
  <div className="row w-100">
    <div className="col-4 ">
      <div className="boxes" ref={box1} onClick={(e) => toggle(e, 0)}></div>
    </div>
    <div className="col-4 ">
      <div className="boxes" ref={box2} onClick={(e) => toggle(e, 3)}></div>
    </div>
    <div className="col-4 ">
      <div className="boxes" ref={box3} onClick={(e) => toggle(e, 6)}></div>
    </div>
  </div>
  <div className="row w-100">
    <div className="col-4 ">
      <div className="boxes" ref={box4} onClick={(e) => toggle(e, 1)}></div>
    </div>
    <div className="col-4 ">
      <div className="boxes" ref={box5} onClick={(e) => toggle(e, 4)}></div>
    </div>
    <div className="col-4 ">
      <div className="boxes" ref={box6} onClick={(e) => toggle(e, 7)}></div>
    </div>
  </div>
  <div className="row w-100">
    <div className="col-4 ">
      <div className="boxes" ref={box7} onClick={(e) => toggle(e, 2)}></div>
    </div>
    <div className="col-4 ">
      <div className="boxes" ref={box8} onClick={(e) => toggle(e, 5)}></div>
    </div>
    <div className="col-4 ">
      <div className="boxes" ref={box9} onClick={(e) => toggle(e, 8)}></div>
    </div>
  </div>
</div>


            <div className="row restartGame d-flex flex-wrap">
                <div className="col-sm-3"></div>
                <div className="col-sm-6 d-flex justify-content-center">
                    <button className="reset form-control" onClick={restartGame}>RESTART</button>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    </div>
  )
}

export default Ticktactoa
