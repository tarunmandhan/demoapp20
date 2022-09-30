import React, { useState } from "react";

const Event = () => {
  const purple = "#8e44ad";
  // const purple = "yellow";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("Click Me");
  const bgChange = () => {
    console.log("clicked");
    let newBg = "#34495e";
    let newName = "tarun";
    setBg(newBg);
    setName(newName);
  };

  const bgBack = () => {
    setBg("#8e44ad");
    setName("ohh no 😱😡");
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        {/* <button onMouseEnter={bgChange} onMouseLeave={bgBack}> */}
        <button onClick={bgChange} onDoubleClick={bgBack}>
          {name}
        </button>
      </div>
    </>
  );
};

export default Event;
