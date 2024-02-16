const getRandomNumber = (min = 1000, max = 10000) => {
  const val = Math.floor(Math.random() * (max - min + 1)) + min;
  return val;
};

export { getRandomNumber };
