import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { api } from "../api";
import CardInfo from "../components/CardInfo";
import { AppContext } from "../App";

interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

const Conta = () => {

    const [userData, setUserData] = useState<null | UserData>()

    const context = useContext(AppContext)
    console.log(context)

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])

    const currentData = new Date()

    const {id} = useParams()
    const navigate = useNavigate()

    if(userData && id !== userData.id) {
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
                                <CardInfo mainContent={`Bem vindo(a) ${userData?.name}`} content={`${currentData.getDay()}/${currentData.getMonth()}/${currentData.getFullYear()} ${currentData.getHours()}:${currentData.getMinutes()}`} />
                                <CardInfo mainContent={`Saldo`} content={`R$${userData?.balance}`} />
                            </>
                        )
                }
            </SimpleGrid>
        </Center>

    );
}

export default Conta