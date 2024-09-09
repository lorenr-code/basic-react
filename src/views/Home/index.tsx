import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { BuscarInfo, BuscarUsuario } from "../../api/Geral";
import { IInfo, IUsuario } from "../../interfaces";

const Home = () => {
  const [dadosUsuario, setDadosUsuario] = useState<IUsuario | undefined>();
  const [dadosInfo, setDadosInfo] = useState<IInfo | undefined>();

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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscarDadosUsuario();
    buscarInfo();
  }, []);

  return (
    <>
      <Header dadosUsuario={dadosUsuario} dadosInfo={dadosInfo} />
      <Menu />
      <Footer />
    </>
  );
};

export default Home;
