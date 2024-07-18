import React, { useState, useEffect, useRef } from "react";
import correctAnswerSound from "../media/pass.mp3";
import failEffect from "../media/error.mp3";

import { toast } from "react-hot-toast";

// failuire message https://www.myinstants.com/en/instant/nope/?utm_source=copy&utm_medium=share
//succes https://www.myinstants.com/en/instant/gta-san-andreas-menu-sound-123/?utm_source=copy&utm_medium=share

const Q2 = () => {
  const correctAnswerAudio = useRef(new Audio(correctAnswerSound)); // Ses dosyasını oluşturun
  const failAudio = useRef(new Audio(failEffect));
  
  const randomNum = () => {
    let num = Math.floor(Math.random() * 30) + 1; // 1 ile 30 arasında rastgele sayı
    return num;
  };

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [userInput, setUserInput] = useState(""); // Kullanıcının girişini tutmak için state

  useEffect(() => {
    const generatePosNum = () => {
      let n1, n2, n3;
      do {
        n1 = randomNum();
        n2 = randomNum();
        n3 = n1 - n2;
      } while (
        n3 <= 0 || 
        n3 > 30 || 
        n1 === 0 || 
        n2 === 0 || 
        n1 === n2 || 
        n1 === 1 || 
        n2 === 1
      );
      setNum1(n1);
      setNum2(n2);
      setNum3(n3);
    };
    generatePosNum();
  }, []);

  const handleChange = (event) => {
    setUserInput(event.target.value); 
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
      toast.success("try again", {icon: '🔄'},{duration:200});
      console.log("wrong number");
    }
  };

  console.log(num1, num2, num3);

  return (
    <div>
      <div>
        {num1} - {num2} ={" "}
      </div>
      <input type="number" value={userInput} onChange={handleChange} />
      <div>
        <button className="button-74" onClick={handleCheck}>Check</button>
      </div>
    </div>
  );
};

export default Q2;
