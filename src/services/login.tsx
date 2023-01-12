/* eslint-disable react-hooks/rules-of-hooks */
import { api } from "../api";

//toda função assincrona retorna uma Promise
export const login = async (email:string, password:string): Promise<boolean> => {
    const data: any = await api

    if((email !== data.email) || (password !== data.password)){
        return false
    }

    return true
}