import { HeaderContainer } from "./styles"

interface HeaderProps{
    time: string,
    name: string
}

export function Header({time, name}: HeaderProps){
    return(
        <HeaderContainer>
            <span>{time}</span>
            <h2>{name}</h2>
        </HeaderContainer>
    )
}