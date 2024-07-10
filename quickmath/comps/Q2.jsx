import React, { useState, useEffect } from "react";

const Q2 = () => {
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
    setUserInput(event.target.value); // Kullanıcının girişini güncelle
  };

  const handleCheck = () => {
    if (parseInt(userInput) === num3) {
      window.location.reload(); // Doğru cevap verildiğinde sayfayı yeniden yükle
    } else {
      console.log("wrong number");
    }
  };

  console.log(num1, num2, num3);

  return (
    <div>
      <div>
        {num1} - {num2} ={" "}
      </div>
      <input type="text" value={userInput} onChange={handleChange} />
      <div>
        <button className="button-74" onClick={handleCheck}>check</button>
      </div>
    </div>
  );
};

export default Q2;
