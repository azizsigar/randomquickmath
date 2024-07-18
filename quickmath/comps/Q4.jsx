import React, { useState, useEffect, useRef } from "react";
import correctAnswerSound from "../media/pass.mp3";
import failEffect from "../media/error.mp3";
import { toast } from "react-hot-toast";

const Q4 = () => {
  const correctAnswerAudio = useRef(new Audio(correctAnswerSound)); // Ses dosyasını oluşturun
  const failAudio = useRef(new Audio(failEffect));

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
      } while (n1 % n2 !== 0 || n1 === n2 || n1 === 1 || n2 === 1 || n1 === 0 || n2 === 0); 
      setNum1(n1);
      setNum2(n2);
    };
    generateNumbers();
  }, []);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleCheck = async () => {
    if (parseInt(userInput) === num1 / num2) {
      await correctAnswerAudio.current.play();
      toast.success("Correct Answer", { icon: '🎉', duration: 700 });
      setTimeout(() => {
        window.location.reload();
      }, 1200);    
      console.log("correct answer");
    } else {
      await failAudio.current.play();
      toast.error("Try again", { icon: '🔄', duration: 500 });
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
        <button className="button-74" onClick={handleCheck}>Check</button>
      </div>
    </div>
  );
};

export default Q4;
