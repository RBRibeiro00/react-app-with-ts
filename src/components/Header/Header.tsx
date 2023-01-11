import { Box, Center, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../../App'
import './Header.css'

export const Header = () => {
    const context = useContext(AppContext)

    return (
        <Box className='header' width='100%'>
            <Center>
                <Text fontSize='3xl'>DIO Bank {context.user}</Text> 
            </Center>
        </Box>
    )
}