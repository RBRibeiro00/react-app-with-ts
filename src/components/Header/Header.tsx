import { Box, Button, Center, Text } from '@chakra-ui/react'
import './Header.css'

export const Header = () => {
    return (
        <Box className='header' width='100%'>
            <Center>
                <Text fontSize='3xl'>DIO Bank</Text> 
            </Center>
            <Button backgroundColor='#FFFFFF' color='black'>
                Sair
            </Button>
        </Box>
    )
}