const BoilingVerdict = (celsius = 0) => {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>Water would not boil.</p>;
  }
};

export default BoilingVerdict;
