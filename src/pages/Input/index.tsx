import { Storefront } from "phosphor-react";
import { FormInput } from "../../components/FormInput";
import { Header } from "../../components/Header";
import { Item } from "../../components/Item";
import { Container } from "../../styles/container";
import { FinancialData, ListaItens, Main } from "../Home/styles";
import { ValueInput } from "./styles";

export function Input(){
    return(
        <Container>
            <Header backgroundColor="#2BD06D"/>
            <Main>
                <ValueInput>
                    <span>Total</span>
                    <h1>R$ {1000.00}</h1>
                </ValueInput>

                <FormInput placeholder={'Lucros'}/>

                <FinancialData>
                    <ListaItens>
                        <Item icon={<Storefront size={32}/>} formPayament={'Cartão de crédito'} local={'Mercado'} value={12.20}/>
                    </ListaItens>
                </FinancialData>
            </Main>
        </Container>
    )
}