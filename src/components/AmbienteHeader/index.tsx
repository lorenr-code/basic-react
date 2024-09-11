import { useState } from "react";
import { IInfo } from "../../interfaces";

const AmbienteHeader = ({dadosInfo}: {dadosInfo: IInfo | undefined}) => {
    const [conexaoTibero] = useState(dadosInfo?.ConexaoTibero);

    const classesConexao = {
        "RPROD": "bg-rprod",
        "DEV": "bg-dev",
        "HOM": "bg-hom"
    }

    
    const estilo = `h-5 ${classesConexao[conexaoTibero]} w-full`;
    return (
        <>
            <div className={estilo}>
            {/* <div className={`h-5 bg-DEV w-full`}> */}
                <p>Ambiente: {dadosInfo?.ConexaoTibero}</p>
            </div>
        </>
    );
};

export default AmbienteHeader;