export const byReduce = (database) => {
  return database.reduce((total, { price, units }) => total + (price * units), 0);
};
