import React, { useState, useEffect,useRef } from "react";


import correctAnswerSound from "../media/pass.mp3";
import failEffect from "../media/error.mp3";
import { toast } from "react-hot-toast";
const Q3 = () => {
  const correctAnswerAudio = useRef(new Audio(correctAnswerSound)); // Ses dosyasını oluşturun
  const failAudio = useRef(new Audio(failEffect));
  

  const randomNum = () => {
    let num = Math.floor(Math.random() * 99);
    while (num === 0) {
      num = Math.floor(Math.random() * 22);
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
    setNum3(n1 * n2);
  }, []);

  const handleChange = (event) => {
    setUserInput(event.target.value); // Update userInput state with the entered value
  };

  const handleCheck = async() => {
    if (parseInt(userInput) === num3) {
     await correctAnswerAudio.current.play();
     toast.success("Correct Answer",{icon: '🎉'},{duration:300});
     setTimeout(() => {
      window.location.reload();
    }, 1200);    
    } else {
      await failAudio.current.play();
      toast.error("try again", {icon: '🔄'},{duration:200});
      console.log("its white magic")
    }
  };
  console.log(num1, num2, num3)

  return (
    <div>
      <div>{num1} x {num2} =</div>
      <input type="number" value={userInput} onChange={handleChange} />
      <div>
        <button className="button-74" onClick={handleCheck}>Check</button>
      </div>
    </div>
  );
};

export default Q3;
