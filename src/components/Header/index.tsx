import { IInfo, IUsuario } from "../../interfaces";
import { nomeUsuario } from "../../utils/string";
import icon from "../../assets/images/rh.svg";
import Button from "../Button";
import { useState } from "react";
import AmbienteHeader from "../AmbienteHeader";

interface HeaderProps {
  dadosUsuario: IUsuario | undefined;
  dadosInfo: IInfo | undefined;
}

const Header = ({ dadosUsuario, dadosInfo }: HeaderProps) => {
  const [logado, setLogado] = useState<boolean>(false);
  if (!dadosInfo){
    return <h1>Carregando...</h1>
  }
  return (
    <>
      <header className="bg-primary h-16 flex justify-between text-white px-2">
        <div className="flex items-center">
          <div className="w-8 mr-2">
            <img
              alt="Ponto Virtual"
              className="text-left"
              src="https://www.funcef.com.br/apl/BibliotecaImagens/Logo/Marca_FUNCEF_negativa.png"
            />
          </div>

          <div className="flex items-center">
            <span>SIS FUNCEF</span>
            <span className="mx-2">/</span>
            <span className="flex items-center">
              <div className="w-4 mr-1">
                <img alt="RH" src={icon} />
              </div>
              {dadosInfo?.NomeSistema}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          {logado && (
            <div className="flex items-center w-full text-sm text-left justify-between">
              <span className="pr-1 text-left max-w-32 ">
                {nomeUsuario(dadosUsuario?.Nome)}
              </span>

              <div className="flex w-12 h-12">
                <div className="rounded-full overflow-hidden">
                  <img src={dadosUsuario?.Foto} className="rounded-full" />
                </div>
              </div>
            </div>
          )}

          {!logado && (
            <Button
              tipo="verde"
              onClick={() => {
                setLogado((oldValue) => !oldValue);
              }}
            />
          )}
        </div>
      </header>

      <AmbienteHeader dadosInfo={dadosInfo} />
    </>
  );
};

export default Header;
