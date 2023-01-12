/* eslint-disable no-mixed-operators */
import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import GButton from "../components/GButton/GButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {

    const [email, setEmail] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)

        if(!loggedIn){
            alert('Email inválido.')
        } else{
            setIsLoggedIn(true)
            changeLocalStorage({login:true})
            navigate('/conta/1')
        }
    }

    return (
        <Box padding='25px'>
            <Card>
                <Center>
                    <h1>Login</h1>
                </Center>
                <Input placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder='password' type='password' />
                <Center>
                    <GButton onClick={() => validateUser(email)}/>
                </Center>
            </Card>
        </Box>
    );
}

export default Home;