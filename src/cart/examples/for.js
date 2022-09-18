export const byFor = (database) => {
  let total = 0;

  for (let index = 0; index < database.length; index += 1) {
    const { price, units } = database[index];
    total += price * units;
  }

  return total;
};
