import { ArrowLeft } from 'phosphor-react'
import { Main } from '../Home/styles'
import { Container } from '../../styles/container'
import { ValueOutput } from './styles'
import { FormInput } from '../../components/FormInput'
import { Header } from '../../components/header'

export function Output() {
  return (
    <Container>
      <Header backgroundColor="#FF5D47" icon={<ArrowLeft size={24} />} />
      <Main>
        <ValueOutput>
          <span>Value</span>
          <h1>{}</h1>
        </ValueOutput>

        <FormInput
          local={'Local'}
          description={'Descrição'}
          value={'Gasto'}
          colorButton={'#FF5D47'}
        />
      </Main>
    </Container>
  )
}
