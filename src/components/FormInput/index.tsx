import { FormContainer } from "./styles"

interface FormInputProps{
    placeholder: string
}

export function FormInput({placeholder}: FormInputProps){
    return(
        <FormContainer>
            <input type='number' placeholder={placeholder}/>
        </FormContainer>
    )
}