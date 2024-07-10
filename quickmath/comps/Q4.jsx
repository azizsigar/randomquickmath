import React, { useState, useEffect } from "react";

const Q4 = () => {
  const randomNum = () => {
    return Math.floor(Math.random() * 99) + 1; 
  };

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userInput, setUserInput] = useState(""); 

  useEffect(() => {
    const generateNumbers = () => {
      let n1, n2;
      do {
        n1 = randomNum();
        n2 = randomNum();
      } while (n1 % n2 !== 0|| n1 === n2 || n1 === 1 || n2 === 1|| n1 === 0 || n2 === 0); 
      setNum1(n1);
      setNum2(n2);
    };
    generateNumbers();
  }, []);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleCheck = () => {
    if (parseInt(userInput) === num1 / num2) {
      window.location.reload();
    } else {
      console.log("wrong answer");
    }
  };

  return (
    <div>
      <div>
        {num1} ÷ {num2} =
      </div>
      <input type="text" value={userInput} onChange={handleChange} />
      <div>
        <button className="button-74" onClick={handleCheck}>check</button>
      </div>
    </div>
  );
};

export default Q4;
