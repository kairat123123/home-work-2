import React, { useState } from "react";

const App = () => {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("blue");

  const handleClickSquare1 = () => {
    setColor1(color1 === "red" ? "blue" : "red");
  };

  const handleClickSquare2 = () => {
    setColor2(color2 === "red" ? "blue" : "red");
  };

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color1,
          margin: "10px",
        }}
        onClick={handleClickSquare1}
      />
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color2,
          margin: "10px",
        }}
        onClick={handleClickSquare2}
      />
    </div>
  );
};

export default App;
