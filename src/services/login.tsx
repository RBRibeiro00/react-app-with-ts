import { api } from "../api";

//toda função assincrona retorna uma Promise
export const login = async (email:string): Promise<void> => {
    const data: any = await api
    if(email !== data.email){
        return alert('Email inválido.')
    }
    alert(`Bem vindo(a), ${email}!`)
}