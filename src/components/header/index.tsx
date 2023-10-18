import { Container, Content, HeaderContainer } from "./styles"

interface HeaderProps{
    img: string,
    time: string,
    name: string,
}

export function Header({img, time, name}: HeaderProps){
    return(
        <HeaderContainer>
            <Container>
                <img src={img} alt="" />
                <Content>
                    <span>{time}</span>
                    <h2>{name}</h2>
                </Content>
            </Container>
        </HeaderContainer>
    )
}