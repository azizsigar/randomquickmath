import React, { useState, useEffect } from "react";

const Q2 = () => {
  const randomNum = () => {
    let num = Math.floor(Math.random() * 10);
    while (num === 0) {
      num = Math.floor(Math.random() * 10);
    }
    return num;
  };

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [userInput, setUserInput] = useState(""); // State to hold user input

  useEffect(() => {
    const n1 = randomNum();
    const n2 = randomNum();
    setNum1(n1);
    setNum2(n2);
    setNum3(n1 - n2);
  }, []);

  const handleChange = (event) => {
    setUserInput(event.target.value); // Update userInput state with the entered value
  };

  const handleCheck = () => {
    if (parseInt(userInput) === num3) {
      window.location.reload(); 
    } else {
      console.log("its white magic")
    }
  };
  console.log(num1, num2, num3)

  return (
    <div>
      <div>{num1} - {num2} =</div>
      <input type="text" value={userInput} onChange={handleChange} />
      <div>
        <button onClick={handleCheck}>check</button>
      </div>
    </div>
  );
};

export default Q2;
