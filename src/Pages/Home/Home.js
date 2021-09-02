import React, { useState, useEffect } from "react";
import "./Home.css";

export default function Home() {
  // const [bioPhase, setBioPhase] = useState(0);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    setCaption(
      "Jordan Panasewicz - also known as Pandasaywhat?! is the brains behind the sounds and visuals of the SayWhat?! project."
    );
  }, []);

  return (
    <div class="home-page">
      <div className="bio-select">
        <div class="biodot biodot1"></div>
        <div class="biodot biodot2"></div>
        <div class="biodot biodot3"></div>
        <div class="biodot biodot4"></div>
        <div class="biodot biodot5"></div>
      </div>
      <section>
        <p className="bio">{caption}</p>
      </section>
    </div>
  );
}
