// comboHandler.js
export const incrementCombo = (correctCount, setCorrectCount) => {
    const newCorrectCount = correctCount + 1;
    setCorrectCount(newCorrectCount);
    localStorage.setItem("correctCount", newCorrectCount);
  };
  
  export const resetCombo = (setCorrectCount) => {
    setCorrectCount(0);
    localStorage.setItem("correctCount", 0);
  };
  