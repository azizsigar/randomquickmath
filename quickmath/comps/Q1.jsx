import React, { useState, useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import correctAnswerSound from "../media/pass.mp3";
import failEffect from "../media/error.mp3";
import failCombo from "../media/errorcombomaster.mp3";
// import {handleErrorComboMaster} from "../handeller/ErrorHandle";
const Q1 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [userInput, setUserInput] = useState(""); // State to hold user input
  const [errorCount, setErrorCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const correctAnswerAudio = useRef(new Audio(correctAnswerSound)); // Ses dosyasını oluşturun
  const failAudio = useRef(new Audio(failEffect));

  const errorAudio = useRef(new Audio(failCombo));
  const randomNum = () => {
    let num = Math.floor(Math.random() * 100);
    while (num === 0) {
      num = Math.floor(Math.random() * 10);
    }
    return num;
  };
 

  useEffect(() => {
    const savedCorrectCount = localStorage.getItem("correctCount");
    if (savedCorrectCount !== null) {
      setCorrectCount(parseInt(savedCorrectCount));
    }
    const n1 = randomNum();
    const n2 = randomNum();
    setNum1(n1);
    setNum2(n2);
    setNum3(n1 + n2)
  }, []);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleCheck = async () => {
    if (parseInt(userInput) === num3) {
      //toaster add
      toast.success("Correct Answer");
      await correctAnswerAudio.current.play();
      const newCorrectCount = correctCount + 1;
      setCorrectCount(newCorrectCount);
      localStorage.setItem("correctCount", newCorrectCount);
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } else {
      await failAudio.current.play();
      const newErrorCount = errorCount + 1;
      correctCount > 0 && setCorrectCount(0);
      setErrorCount(newErrorCount);
      localStorage.setItem("correctCount", 0);
      setTimeout(() => {
        toast.error("Try again", {
          duration: 500,
        });
      }, 1000);
      
      // if (newErrorCount > 3) {
      //   handleErrorComboMaster(setErrorCount, errorAudio);
      // }
    }
  };

  console.log(num1, num2, num3);
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div>
        {/* <h1>Quick Math</h1> */}
        {/* <h2>Combo: {correctCount}</h2> */}
      </div>
      <div>
        {num1} + {num2} =
      </div>
      <input type="number" value={userInput} onChange={handleChange} />
      <div>
        <button className="button-74" onClick={handleCheck}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Q1;
