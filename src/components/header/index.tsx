import { ReactNode } from 'react'
import { Container, Content, HeaderContainer, IconeReturn } from './styles'
import { Link } from 'react-router-dom'

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
          <>
            <img src={img} />
            <Content>
              <span>{time}</span>
              <h2>{name}</h2>
            </Content>
          </>
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
