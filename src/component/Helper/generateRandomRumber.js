const generateRandomRumber = (min = 1, max = 6) => {
  const val = Math.floor(Math.random() * max) + min;

  switch (+val) {
    case 1:
      return "one";
      break;
    case 2:
      return "two";
      break;
    case 3:
      return "three";
      break;
    case 4:
      return "four";
      break;
    case 5:
      return "five";
      break;
    case 6:
      return "six";
      break;
  }
};

export default generateRandomRumber;
