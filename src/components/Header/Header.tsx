import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'
import { AppContext } from '../AppContext'
import './Header.css'

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const accountInfo = () => {
        navigate('/infoconta')
    }

    const logout = () => {
        changeLocalStorage({ login: false })
        setIsLoggedIn(false)
        navigate('/')
    }

    return (
        <Flex className='header' width='100%' padding='5px'>
            <Box>
                <Center>
                    <Text fontSize='3xl'>DIO Bank</Text>
                </Center>
            </Box>
            {
                isLoggedIn &&
                <>
                    <Spacer />
                    <Button backgroundColor='orange' color='black' onClick={() => accountInfo()}>Informações da conta</Button>
                    <Button marginLeft='5px' color='black' onClick={() => logout()}>
                        Logout
                    </Button>
                </>
            }
        </Flex>
    )
}