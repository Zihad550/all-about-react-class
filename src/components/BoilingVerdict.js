const BoilingVerdict = ({ temprature = 0 }) => {
  if (temprature >= 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>Water would not boil.</p>;
  }
};

export default BoilingVerdict;
