import { api } from ".."
import { IDados, IInfo, IMenu, IUsuario } from "../../interfaces"

const BuscarMenu = async () => {
    const response = await api.get<IDados<IMenu>>("BuscarMenu")
    return response.data.resultado
}

const BuscarUsuario = async () => {
    const response = await api.get<IDados<IUsuario>>("BuscarUsuario")
    return response.data.resultado
}

const BuscarInfo = async () => {
    const response = await api.get<IDados<IInfo>>("Info")
    return response.data.resultado
}

export {
    BuscarMenu,
    BuscarUsuario,
    BuscarInfo
}
