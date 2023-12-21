import { ReactNode } from 'react'
import {
  Container,
  Content,
  DescriptionPeople,
  HeaderContainer,
  Hello,
  IconeReturn,
  Options,
} from './styles'
import { Link } from 'react-router-dom'
import { BellSimple, GearSix } from 'phosphor-react'

interface HeaderProps {
  img?: string
  time?: string
  name?: string
  icon?: ReactNode
  backgroundColor?: string
}

export function Header({
  icon,
  img,
  time,
  name,
  backgroundColor,
}: HeaderProps) {
  return (
    <HeaderContainer style={{ backgroundColor }}>
      <Container>
        {img !== undefined && (
          <Content>
            <Hello>
              <img src={img} />

              <DescriptionPeople>
                <span>{time}</span>
                <h2>{name}</h2>
              </DescriptionPeople>
            </Hello>
            <Options>
              <Link to={''}>
                <BellSimple size={32} />
              </Link>

              <Link to={''}>
                <GearSix size={32} />
              </Link>
            </Options>
          </Content>
        )}
        {icon !== undefined && (
          <IconeReturn>
            <Link to={'/home'}>{icon}</Link>
          </IconeReturn>
        )}
      </Container>
    </HeaderContainer>
  )
}
