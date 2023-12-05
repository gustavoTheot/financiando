import { ArrowLeft } from 'phosphor-react'
import { Container } from '../../styles/container'
import { Main } from '../Home/styles'
import { FormContainer, ValueInput } from './styles'
import { Header } from '../../components/header'
import { api } from '../../server/api'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const inputFormSchema = z.object({
  local: z.string().nullable(),
  description: z.string().nullable(),
  value: z.string(),
})

type InputForm = z.infer<typeof inputFormSchema>

export function Input() {
  const { register, handleSubmit, reset } = useForm<InputForm>({
    resolver: zodResolver(inputFormSchema),
    defaultValues: {
      description: '',
      local: '',
      value: undefined,
    },
  })

  async function handleRegister(data: InputForm) {
    const id = localStorage.getItem('id')

    const valuesInput = {
      wallet: {
        id,
      },
      local: data.local,
      description: data.description,
      value: data.value,
      type: 'input',
    }

    try {
      await api.post('/record', valuesInput)
      reset()
    } catch (error) {
      alert(error)
    }
  }
  return (
    <Container>
      <Header backgroundColor="#2BD06D" icon={<ArrowLeft size={24} />} />
      <Main>
        <ValueInput>
          <span>Value</span>
          <h1>{}</h1>
        </ValueInput>

        <FormContainer onSubmit={handleSubmit(handleRegister)}>
          <input type="text" placeholder="Local" {...register('local')} />
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
          />
          <input type="text" placeholder="Valor" {...register('value')} />

          <button style={{ backgroundColor: '#2BD06D' }}>Confirm</button>
        </FormContainer>
      </Main>
    </Container>
  )
}
