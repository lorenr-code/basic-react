const nomeUsuario = (nome?: string) => {
  let nomes = (nome ?? "").split(" ");

  return nomes[0] + " " + nomes[nomes.length - 1];
};

export { nomeUsuario };
