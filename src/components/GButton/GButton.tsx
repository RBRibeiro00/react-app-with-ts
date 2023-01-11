import { MouseEventHandler } from "react"
import { Button } from "@chakra-ui/react"
import './GButton.css'

interface IButton {
    onClick: MouseEventHandler
}

// Todo componente é uma função
export const GButton = ({ onClick }: IButton) => {
    return (
        <Button onClick={onClick} className='signIn'>Sign in</Button>
    )
} 

export default GButton