import { toast } from "react-hot-toast";

export const handleErrorComboMaster = (setErrorCount, errorAudio) => {
  setErrorCount(0);
  errorAudio.current.play();
  localStorage.setItem("correctCount", 0);
  toast.error("Charlie ah! Are you an error combo master?", {
    duration: 6000,
    position: "bottom-center",
  });
};