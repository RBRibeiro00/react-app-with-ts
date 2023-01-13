import { Box, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { api } from "../api"
import { Card } from "../components/Card"
import { UserData } from "./Conta"

const ContaInfo = () => {

    const [userData, setUserData] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])


    return (
        <>
            <Box padding='25px'>
                <Card>
                    <Text fontSize='3xl' fontWeight='bold' color='green'>
                        Informações da conta
                    </Text>
                    <Text fontSize='xl' fontWeight='bold' >
                        Nome: {userData?.name}
                    </Text>
                    <Text fontSize='xl' fontWeight='bold' >
                        Email: {userData?.email}
                    </Text>
                    <Link to='/conta/1' color="teal.500">
                        Ir para página da conta
                    </Link>
                </Card>
            </Box>
        </>
    )
}

export default ContaInfo