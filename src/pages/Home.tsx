/* eslint-disable no-mixed-operators */
import { Box, Center, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import GButton from "../components/GButton/GButton";
import { login } from "../services/login";
import { api } from "../api";

interface UserData {
    email: string,
    password: string,
    name: string
}

const Home = () => {
    const [email, setEmail] = useState('')
    const [userData, setUserData] = useState<null | UserData>()
    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])

    console.log(userData)

    return (
        <Box minHeight='100vh' padding='25px' backgroundColor='#252A26'>
            <Card>
                {userData === null || userData === undefined ?
                    <h1>Loading...</h1> :
                    <h1>Informações carregadas</h1>
                }
                <Center>
                    <h1>Login</h1>
                </Center>
                <Input placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder='password' type='password' />
                <Center>
                    <GButton onClick={() => login(email)} />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;