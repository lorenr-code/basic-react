const nomeUsuario = (nome?: string) => {
  const nomes = (nome ?? "").split(" ");

  return nomes[0] + " " + nomes[nomes.length - 1];
};

export { nomeUsuario };
