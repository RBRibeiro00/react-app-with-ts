/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-mixed-operators */
import { Box, Center, Heading, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import GButton from "../components/Buttons/SButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";
import "../components/Inputs/input.css"

const Home = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            alert('Email ou senha inválidos.')
        } else {
            setIsLoggedIn(true)
            changeLocalStorage({ login: true })
            navigate('/conta/1')
        }
    }

    return (

        <Box padding='25px'>
            <Card>
                <Center>
                    <Heading as="h1" fontSize="2xl" fontWeight="medium" color="teal.500">
                        Login
                    </Heading>
                </Center>
                <Input className="login" placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input className="login" placeholder='password' value={password} type='password' onChange={(event) => setPassword(event.target.value)} />
                <Center>
                    <GButton onClick={() => validateUser(email, password)} />
                </Center>
            </Card>

        </Box>

    );
}

export default Home;