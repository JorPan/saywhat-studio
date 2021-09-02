import React, { useState } from "react";
import Bio from "./Bio";
import "./Home.css";

export default function Home() {
  const [bioPhase, setBioPhase] = useState(Bio[0]);

  return (
    <div class="home-page">
      <div className="bio-select">
        <div class="biodot biodot1" onClick={() => setBioPhase(Bio[0])}></div>
        <div class="biodot biodot2" onClick={() => setBioPhase(Bio[1])}></div>
        <div class="biodot biodot3" onClick={() => setBioPhase(Bio[2])}></div>
        <div class="biodot biodot4" onClick={() => setBioPhase(Bio[3])}></div>
        <div class="biodot biodot5" onClick={() => setBioPhase(Bio[4])}></div>
      </div>
      <section>
        <p className="bio">{bioPhase.caption}</p>
      </section>
    </div>
  );
}
