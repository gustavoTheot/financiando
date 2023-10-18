import { ReactNode } from "react"
import { ButtonContainer, Circle } from "./styles"

interface ButtonProps{
    icon: ReactNode,
    description: string
}

export function Button({icon, description}: ButtonProps){
    return(
        <ButtonContainer>
            <Circle>
                {icon}
            </Circle>
            <span>{description}</span>
        </ButtonContainer>
    )
}