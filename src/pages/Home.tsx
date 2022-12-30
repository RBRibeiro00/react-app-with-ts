import { Box, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import GButton from "../components/GButton/GButton";
import { login } from "../services/login";

const Home = () => {

    return (
        <Box minHeight='100vh' padding='25px' backgroundColor='#252A26'>
            <Card>
                <Center>
                    <h1>Login</h1>
                </Center>
                <Input placeholder='email' />
                <Input placeholder='password' type='password' />
                <Center>
                    <GButton onClick={() => login()} />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;