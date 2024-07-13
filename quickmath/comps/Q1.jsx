import React, { useState, useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import correctAnswerSound from "../media/pass.mp3"; // Ses dosyasını içe aktarın
import errorSound from "../media/errorcombomaster.mp3"; // Ses dosyasını içe aktarın

const Q1 = () => {
  const randomNum = () => {
    let num = Math.floor(Math.random() * 100);
    while (num === 0) {
      num = Math.floor(Math.random() * 10);
    }
    return num;
  };

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [userInput, setUserInput] = useState(""); // State to hold user input
  const [errorCount, setErrorCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const correctAnswerAudio = useRef(new Audio(correctAnswerSound)); // Ses dosyasını oluşturun
  const errorAudio = useRef(new Audio(errorSound)); 

  useEffect(() => {
    const n1 = randomNum();
    const n2 = randomNum();
    setNum1(n1);
    setNum2(n2);
    setNum3(n1 + n2);

    // Local storage'dan doğru cevap sayısını al
    const savedCorrectCount = localStorage.getItem("correctCount");
    if (savedCorrectCount !== null) {
      setCorrectCount(parseInt(savedCorrectCount));
    }
  }, []);

  const handleChange = (event) => {
    setUserInput(event.target.value); // Update userInput state with the entered value
  };

  const handleCheck = () => {
    if (parseInt(userInput) === num3) {
      //toaster add
      toast.success("Correct Answer");
      correctAnswerAudio.current.play();
      const newCorrectCount = correctCount + 1;
      setCorrectCount(newCorrectCount);
      localStorage.setItem("correctCount", newCorrectCount);
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } else {
      toast.error("Try again", {
        duration: 500,
      });
      setCorrectCount(0);
      localStorage.setItem("correctCount", 0);

      const newErrorCount = errorCount + 1;
      setErrorCount(newErrorCount); // Hatalı deneme sayısını artır
      if (newErrorCount > 15) {
        errorAudio.current.play(); 
        toast.error("Are you an error combo master?", { duration: 6000, position: 'bottom-center' });
      }
    }
  };

  console.log(num1, num2, num3);
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div>
        <h1>Quick Math</h1>
        <h2>Combo: {correctCount}</h2>
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
