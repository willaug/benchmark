export const byForEach = (database) => {
  let total = 0;

  database.forEach(({ price, units }) => {
    total += price * units;
  });

  return total;
};
