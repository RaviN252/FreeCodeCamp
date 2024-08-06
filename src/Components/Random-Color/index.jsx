import React, { useEffect, useState } from "react";

function RandomColor() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // function for utility
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function hexColor() {
    // #678676
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function rgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g} ${b})`);
  }

  // useEffect
  useEffect(() => {
    if (typeofColor === "rgb") hexColor();
    else rgbColor();
  }, [typeofColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeofColor("hex")}> Create HEX Color</button>
      <button onClick={() => setTypeofColor("rgb")}>Create RGB Color</button>
      <button onClick={typeofColor === "hex" ? hexColor : rgbColor}>
        Generate Random Color
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeofColor === "rgb" ? "RGB COLOR" : "HEX COLOR"}</h3>
        <br />
        <h1>{color}</h1>
      </div>
    </div>
  );
}
export default RandomColor;
