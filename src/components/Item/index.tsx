import { ReactNode } from "react"
import { Container, Description, ItemContainer, ItemDescrpiton, TipeLocal } from "./styles"

interface ItemProps{
    icon: ReactNode,
    local: string,
    formPayament: string,
    value: number
}

export function Item({icon, local, formPayament, value}: ItemProps){
    return(
        <ItemContainer>
            <ItemDescrpiton>
                <Description>
                    <Container>
                        {icon}
                    </Container>
                    <TipeLocal>
                        <span>{local}</span>
                        <p>{formPayament}</p>
                    </TipeLocal>
                </Description>
                {
                    value < 0 ? (
                        <span style={{color:'#FF5D47'}}>
                            R$ {value}
                        </span>
                    ) : <span style={{color:'#2BD06D'}}>
                    R$ {value}
                    </span>
                }
                
            </ItemDescrpiton>
        </ItemContainer>
    )
}