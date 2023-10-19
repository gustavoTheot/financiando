import { Storefront } from "phosphor-react";
import { Header } from "../../components/Header";
import { Item } from "../../components/Item";
import { FinancialData, ListaItens, Main } from "../Home/styles";
import { Container } from "../../styles/container";
import { ValueOutput } from "./styles";
import { FormInput } from "../../components/FormInput";

export function Output(){
    return(
        <Container>
            <Header backgroundColor="#FF5D47"/>
            <Main>
                <ValueOutput>
                    <span>Total</span>
                    <h1>R$ {1000.00}</h1>
                </ValueOutput>

                <FormInput placeholder={'Gastos'}/>

                <FinancialData>
                    <ListaItens>
                        <Item icon={<Storefront size={32}/>} formPayament={'Cartão de crédito'} local={'Mercado'} value={-12.20}/>
                    </ListaItens>
                </FinancialData>
            </Main>
        </Container>
    )
}