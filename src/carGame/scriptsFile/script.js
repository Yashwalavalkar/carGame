import React, { useEffect, useState } from "react";
import "../styles/Style.css";

function Game() {
  const [score, setScore] = useState(0);
  const [cross, setCross] = useState(true);

  // Function to handle keydown events
  const handleKeyDown = (e) => {
    const car = document.querySelector(".car");
    const width = parseInt(
      window.getComputedStyle(car).getPropertyValue("width")
    );

    if (e.keyCode === 38) {
      car.classList.add("animatecar");
      setTimeout(() => {
        car.classList.remove("animatecar");
      }, 600);
    } else if (e.keyCode === 39) {
      const carX = parseInt(
        window.getComputedStyle(car).getPropertyValue("left")
      );

      if (window.innerWidth >= 500 && carX <= width - 300) {
        car.style.left = carX + 120 + "px";
      }
    } else if (e.keyCode === 37) {
      const carX = parseInt(
        window.getComputedStyle(car).getPropertyValue("left")
      );

      if (window.innerWidth >= 500) {
        car.style.left = carX - 120 + "px";
      }
    }
  };

  // Effect hook to run once on component mount
  useEffect(() => {
    const title = document.querySelector(".titleGame");

    setTimeout(() => {
      title.innerHTML = "<h2><b>Play The Game</b></h2>";
    }, 1000);

    setTimeout(() => {
      const obstacle = document.querySelector(".obstacle");
      obstacle.classList.add("obstacleAni");
    }, 2000);

    // Event listener for keydown
    document.addEventListener("keydown", handleKeyDown);

    // Clean-up function
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Effect hook for game logic
  useEffect(() => {
    const gameInterval = setInterval(() => {
      const car = document.querySelector(".car");
      const obstacle = document.querySelector(".obstacle");

      if (car) {
        const carX = parseInt(
          window.getComputedStyle(car).getPropertyValue("left")
        );
        const carY = parseInt(
          window.getComputedStyle(car).getPropertyValue("top")
        );

        const oX = parseInt(
          window.getComputedStyle(obstacle).getPropertyValue("left")
        );
        const oY = parseInt(
          window.getComputedStyle(obstacle).getPropertyValue("top")
        );

        const offsetX = Math.abs(carX - oX);
        const offsetY = Math.abs(carY - oY);

        if (offsetX < 200 && offsetY < 30 && offsetX > 10) {
          const title = document.querySelector(".titleGame");
          title.innerHTML = "<h2><b>Wait Starting the Game Again</b></h2>";
          obstacle.classList.remove("obstacleAni");

          setTimeout(() => {
            title.innerHTML = "<h2><b>Play The Game</b></h2>";
          }, 1000);

          setTimeout(() => {
            obstacle.classList.add("obstacleAni");
          }, 2000);
        } else if (cross && offsetX < 200) {
          setCross(false);
          setScore((prevScore) => prevScore + 1);
          setTimeout(() => {
            setCross(true);
          }, 1000);
        }
      }
    }, 1000);

    // Clean-up function
    return () => clearInterval(gameInterval);
  }, []);

  return (
    <div className="gamecontainerImage container">
      <div className="row">
        <div className="titleGame d-flex justify-content-end col-sm-6">
          <h2>
            <b>STARTING THE GAME...</b>
          </h2>
        </div>
        <div className="col-sm-6 d-flex flex-column">
          <div className="d-flex justify-content-end m-3">
            <h3>SCORE</h3>
          </div>
          <div className="d-flex justify-content-end m-2 scoreCount">{score}</div>
        </div>
      </div>

      <div className="gameContainer">
        <div className="car"></div>
        <div className="obstacle text-center text-white">
          <b>OBSTACLE</b>
        </div>
      </div>
    </div>
  );
}

export default Game;
