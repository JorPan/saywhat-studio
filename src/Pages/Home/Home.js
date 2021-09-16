import React, { useState } from "react";
import Bio from "./Bio";
import "./Home.css";

export default function Home() {
  const [bioPhase, setBioPhase] = useState(Bio[6]);

  return (
    <div class="home-page">
      <p className="about">Click any of these to learn more</p>
      <div className="bio-select">
        <div class="biodot biodot1" onClick={() => setBioPhase(Bio[0])}></div>
        <div class="biodot biodot2" onClick={() => setBioPhase(Bio[1])}></div>
        <div class="biodot biodot3" onClick={() => setBioPhase(Bio[2])}></div>
        <div class="biodot biodot4" onClick={() => setBioPhase(Bio[3])}></div>
        <div class="biodot biodot5" onClick={() => setBioPhase(Bio[4])}></div>
        <div class="biodot biodot6" onClick={() => setBioPhase(Bio[5])}></div>
      </div>
      <section className={bioPhase.id}>
        <div className={`${bioPhase.id}-caption`}>
          <p>{bioPhase.caption}</p>
        </div>

        <img
          className={`${bioPhase.id}-photo`}
          src={bioPhase.img}
          alt={bioPhase.alt}
        />
      </section>
    </div>
  );
}
