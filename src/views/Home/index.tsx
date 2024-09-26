import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { BuscarInfo, BuscarMenu, BuscarUsuario } from "../../api/Geral";
import { IInfo, IMenu, IUsuario } from "../../interfaces";

const Home = () => {
  const [dadosUsuario, setDadosUsuario] = useState<IUsuario | undefined>();
  const [dadosInfo, setDadosInfo] = useState<IInfo | undefined>();
  const [dadosMenu, setDadosMenu] = useState<IMenu[] | undefined>();

  const buscarDadosUsuario = async () => {
    try {
      const data = await BuscarUsuario();
      setDadosUsuario(data);
    } catch (error) {
      console.log(error);
    }
  };

  const buscarInfo = async () => {
    try {
      const data = await BuscarInfo();
      setDadosInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  const buscarMenu = async () => {
    try {
      const data = await BuscarMenu();
      setDadosMenu(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscarDadosUsuario();
    buscarInfo();
    buscarMenu();
  }, []);

  if (!dadosUsuario || !dadosMenu || !dadosInfo) {
    return <h1>Carregando...</h1>;
  }
  return (
    <>
      <Header dadosUsuario={dadosUsuario} dadosInfo={dadosInfo} />
      <Menu dadosMenu={dadosMenu} />
      <div>Conteúdo</div>
      <Footer dadosInfo={dadosInfo} />
    </>
  );
};

export default Home;
