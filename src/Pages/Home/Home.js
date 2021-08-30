import React, { useState, useEffect } from "react";
import "./Home.css";

export default function Home() {
  const [caption, setCaption] = useState("");

  useEffect(() => {
    setCaption(
      "Jordan Panasewicz - also known as Pandasaywhat?! is the brains behind the sounds and visuals of the SayWhat?! project."
    );
  }, []);

  return (
    <div>
      <img src="" />
      <p className="bio">{caption}</p>
    </div>
  );
}
