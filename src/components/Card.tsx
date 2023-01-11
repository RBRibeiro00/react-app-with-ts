// Todo arquivo ts + html deve ser .tsx

import { Box } from "@chakra-ui/react"

// Todo componente é uma função
export const Card = ({children}: any) => {
    return (
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
            {children}
        </Box>
    )
} 