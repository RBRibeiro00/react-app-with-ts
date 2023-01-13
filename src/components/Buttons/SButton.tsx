import { MouseEventHandler } from "react"
import { Button } from "@chakra-ui/react"

export interface IButton {
    onClick: MouseEventHandler
}

// Todo componente é uma função
export const SButton = ({ onClick }: IButton) => {
    return (
        <Button onClick={onClick} marginLeft='5px'
            backgroundColor="teal.500"
            color="white"
            _hover={{ backgroundColor: "teal.600" }}>Sign in</Button>
    )
}

export default SButton