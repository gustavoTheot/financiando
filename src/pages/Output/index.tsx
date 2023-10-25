import { ArrowLeft, Storefront } from "phosphor-react";
import { Header } from "../../components/Header";
import { Item } from "../../components/Item";
import { FinancialData, ListaItens, Main } from "../Home/styles";
import { Container } from "../../styles/container";
import { ValueOutput } from "./styles";
import { FormInput } from "../../components/FormInput";
import { MyWallet } from "../../components/Wallet";

export function Output(){
    return(
        <Container>
            <Header backgroundColor="#FF5D47" icon={<ArrowLeft size={24}/>}/>
            <Main>
                <ValueOutput>
                    <MyWallet/>
                </ValueOutput>

                <FormInput value={'Gasto'} description={'Descrição'} locale={'Local'}/>

                <FinancialData>
                    <ListaItens>
                        <Item icon={<Storefront size={32}/>} formPayament={'Cartão de crédito'} local={'Mercado'} value={-12.20}/>
                    </ListaItens>
                </FinancialData>
            </Main>
        </Container>
    )
}