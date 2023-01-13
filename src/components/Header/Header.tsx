import { Box, Button, Center, Spacer } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'
import { AppContext } from '../AppContext'
import { LButton } from '../Buttons/LButton'

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
        <Box as="header" bg="teal.500" color="white" p={4} display="flex" alignItems="center" justifyContent="space-between">
            <Box fontWeight="bold"  fontSize="2xl">
                <Center>
                    DIO BANK
                </Center>
            </Box>
            {
                isLoggedIn &&
                <>
                    <Spacer />
                    <Button backgroundColor='#ffffff' _hover={{ backgroundColor: "teal.100" }} color='black' onClick={() => accountInfo()}>Informações da conta</Button>
                    <LButton onClick={() => logout()} />    
                </>
            }
        </Box>
    )
}