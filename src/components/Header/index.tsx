import { useEffect, useState } from "react";
import { BuscarUsuario } from "../../api/Geral";
import { IInfo, IUsuario } from "../../interfaces";
import { nomeUsuario } from "../../utils/string";
import icon from "../../assets/images/rh.svg"

interface HeaderProps {
  dadosUsuario: IUsuario | undefined;
  dadosInfo: IInfo | undefined;
}

const Header = ({ dadosUsuario, dadosInfo }: HeaderProps) => {
  return (
    <>
      <header className="flex bg-primary items-center justify-between px-4">
        <div className="flex w-72 justify-between">
          <div className="flex w-6 items-center">
            <img
              alt="Ponto Virtual"
              className="text-left"
              src="https://www.funcef.com.br/apl/BibliotecaImagens/Logo/Marca_FUNCEF_negativa.png"
            />
          </div>
          <div className="flex w-32">
          <img
              alt="RH"
              className="text-left"
              src={icon}
            />
            <span>{dadosInfo?.NomeSistema}</span>
          </div>
        </div>

        <div className="flex w-64 justify-between items-center">
          <span>{nomeUsuario(dadosUsuario?.Nome)}</span>
          <div className="rounded-full w-[45px] h-[45px] overflow-hidden">
            <img alt="Ponto Virtual" src={dadosUsuario?.Foto} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
