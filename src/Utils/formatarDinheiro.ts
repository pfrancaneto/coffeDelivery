export const formatarDinheiro = (value: number) => {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });
};