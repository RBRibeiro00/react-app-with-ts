import { Button } from "@chakra-ui/react"
import { IButton } from "./SButton"

//Botão utilizado para logout
export const LButton = ({ onClick }: IButton) => {
    return (
        <Button onClick={onClick} marginLeft='5px'
            backgroundColor="teal.900"
            color="white"
            _hover={{ backgroundColor: "teal.600" }}> Logout</Button >
    )
}