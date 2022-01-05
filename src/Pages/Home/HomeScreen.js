import { useState } from "react";
import "./HomeScreen.css";
import Bio from "./Bio";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

export default function HomeScreen() {
  const [bioPhase, setBioPhase] = useState(6);

  const changeBioPhase = (direction) => {
    if (direction === "down") {
      bioPhase === 0 ? setBioPhase(6) : setBioPhase(bioPhase - 1);
    } else if (direction === "up") {
      bioPhase === 6 ? setBioPhase(0) : setBioPhase(bioPhase + 1);
    }
  };

  return (
    <div class="home-page">
      <h1 class="description">{Bio[bioPhase].caption}</h1>
      <div class="carousel">
        <div>
          <MdArrowLeft class="arrow" onClick={() => changeBioPhase("down")} />
        </div>
        <div>
          <img class="images" src={Bio[bioPhase].img} alt={Bio[bioPhase].id} />
        </div>
        <div>
          <MdArrowRight class="arrow" onClick={() => changeBioPhase("up")} />
        </div>
      </div>
    </div>
  );
}
