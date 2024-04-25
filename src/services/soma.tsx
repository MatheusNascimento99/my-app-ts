export const Soma = (num: number): number => {
  return num + 1;
};

export const Multiplicar = (num: number, mult: number): number | string => {
  if (mult === 2 || mult === 3) {
    return num * mult;
  }
  return 'Multiplicador não aceito'
};
