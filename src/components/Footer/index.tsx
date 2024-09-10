import { IInfo } from "../../interfaces";

interface FooterProps {
  dadosInfo?: IInfo;
}

const Footer = ({ dadosInfo }: FooterProps) => {
  return (
    <>
      <footer className=" text-cinza px-6 py-4 flex justify-between items-center">
        <span>Copyright © 2024 - FUNCEF</span>
        <span>Versão: {dadosInfo?.Versao}</span>
        <span>
          <img
            src="https://www.funcef.com.br/apl/BibliotecaImagens/Logo/logo-funcef-rodape.png"
            alt="FUNCEF - O Futuro conta com a gente!"
          />
        </span>
      </footer>
    </>
  );
};

export default Footer;
