import { useForm } from 'react-hook-form'
import { FormContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { api } from '../../server/api'
import { useParams } from 'react-router-dom'

interface FormInputProps {
  local?: string
  description?: string
  value: string
  colorButton: string
  typeInput?: string
}

const inputFormSchema = z.object({
  local: z.string().nullable(),
  description: z.string().nullable(),
  value: z.string(),
})

type InputForm = z.infer<typeof inputFormSchema>

export function FormInput({
  local,
  description,
  value,
  colorButton,
}: FormInputProps) {
  const { register, handleSubmit } = useForm<InputForm>({
    resolver: zodResolver(inputFormSchema),
  })

  const { id } = useParams()

  async function handleRegister(data: InputForm) {
    const valuesInput = {
      financialManager: {
        id,
      },
      local: data.local,
      description: data.description,
      value: data.value,
      typeInput: 'input',
    }

    console.log(valuesInput)
    try {
      await api.post('/record', valuesInput)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleRegister)}>
      <input type="text" placeholder={local} {...register('local')} />
      <input
        type="text"
        placeholder={description}
        {...register('description')}
      />
      <input type="text" placeholder={value} {...register('value')} />

      <button style={{ backgroundColor: colorButton }}>Confirm</button>
    </FormContainer>
  )
}
