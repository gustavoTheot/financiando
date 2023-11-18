import { ArrowLeft } from 'phosphor-react'
import { FormInput } from '../../components/FormInput'
import { Container } from '../../styles/container'
import { Main } from '../Home/styles'
import { ValueInput } from './styles'
import { Header } from '../../components/header'

export function Input() {
  return (
    <Container>
      <Header backgroundColor="#2BD06D" icon={<ArrowLeft size={24} />} />
      <Main>
        <ValueInput>
          <span>Value</span>
          <h1>{}</h1>
        </ValueInput>

        <FormInput
          local={'Local'}
          description={'Descrição'}
          value={'Lucro'}
          colorButton={'#2BD06D'}
        />
      </Main>
    </Container>
  )
}
