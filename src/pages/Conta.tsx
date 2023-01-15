import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { api } from "../api";
import CardInfo from "../components/CardInfo";
import { AppContext } from "../components/AppContext";

export interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

const Conta = () => {

    const [userData, setUserData] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    //se não estiver logado, não irá navegar para a página de conta
    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])

    const date = new Date()
    let currentDate = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear(); 

    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                        (<Center><Spinner size='xl' color='white' /></Center>) :
                        (
                            <>
                                <CardInfo mainContent={`Bem vindo(a) ${userData?.name}`} content={`${currentDate}`}/>
                                <CardInfo mainContent={`Saldo`} content={`R$${userData?.balance}`} />
                            </>

                        )
                }
            </SimpleGrid>
        </Center>

    );
}

export default Conta