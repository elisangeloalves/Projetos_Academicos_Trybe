module.exports = (date) => {
  const adicionaUm = (data) => (data <= 9 ? `0${data.toString()}` : data.toString());
  const dataAtual = `${adicionaUm(date.getDate())}-${adicionaUm(date.getMonth() + 1)}-${date.getFullYear()}`;
  const horaAtual = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return `${dataAtual} ${horaAtual}`;
};
