// Todo arquivo ts + html deve ser .tsx

import { Box, Center, Input } from "@chakra-ui/react"
import { useState } from "react"
import { login } from "../services/login"
import GButton from "./GButton/GButton"

// Todo componente é uma função
export const Card = (): any => {

    const [email, setEmail] = useState('')

    return (
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
            <Center>
                <h1>Login</h1>
            </Center>
            <Input placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder='password' type='password' />
            <Center>
                <GButton onClick={() => login(email)} />
            </Center>
        </Box>
    )
} 