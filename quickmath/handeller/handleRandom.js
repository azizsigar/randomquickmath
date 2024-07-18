export const randomNum = () => {
    let num = Math.floor(Math.random() * 100);
    while (num === 0) {
      num = Math.floor(Math.random() * 10);
    }
    return num;
  };