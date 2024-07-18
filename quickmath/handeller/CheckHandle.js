import { toast } from "react-hot-toast";
import { incrementCombo, resetCombo } from "../handeller/ComboHandeller";

export const handleCheck = async (
  userInput,
  num3,
  correctAnswerAudio,
  correctCount,
  setCorrectCount,
  failAudio,
  errorCount,
  setErrorCount,
  handleErrorComboMaster,
  errorAudio
) => {
  if (parseInt(userInput) === num3) {
    toast.success("Correct Answer");
    await correctAnswerAudio.current.play();
    incrementCombo(correctCount, setCorrectCount);
    setTimeout(() => {
      window.location.reload();
    }, 1200);
  } else {
    await failAudio.current.play();
    const newErrorCount = errorCount + 1;
    correctCount > 0 && resetCombo(setCorrectCount);
    setErrorCount(newErrorCount);
    setTimeout(() => {
      toast.error("Try again", {
        duration: 500,
      });
    }, 1000);

    if (newErrorCount > 3) {
      handleErrorComboMaster(setErrorCount, errorAudio);
    }
  }
};
