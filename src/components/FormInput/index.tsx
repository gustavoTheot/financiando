import { useForm } from "react-hook-form";
import { FormContainer } from "./styles"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod";

interface FormInputProps{
    locale: string,
    description: string
    value: string
}

const inputFormSchema = z.object({
    local: z.string(),
    description: z.string(),
    value: z.string()
})

type InputForm = z.infer<typeof inputFormSchema>

export function FormInput({locale, description, value}: FormInputProps){
    const {register, handleSubmit } = useForm<InputForm>({
        resolver: zodResolver(inputFormSchema),
    });

    async function handleRegister(data: InputForm){
        const valuesInput = {
            local: data.local,
            description: data.description,
            value: data.value
        }
        console.log(valuesInput)
    }

    return(
        <FormContainer onSubmit={handleSubmit(handleRegister)} >
            <input type="text" placeholder={locale} {...register('local')} />
            <input type="text" placeholder={description} {...register('description')}/>
            <input type='text' placeholder={value} {...register('value')}/>

            <button>Confirm</button>
        </FormContainer>
    )
}