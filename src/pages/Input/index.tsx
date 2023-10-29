import { ArrowLeft, Storefront } from "phosphor-react";
import { FormInput } from "../../components/FormInput";
import { Header } from "../../components/Header";
import { Item } from "../../components/Item";
import { Container } from "../../styles/container";
import { FinancialData, ListaItens, Main } from "../Home/styles";
import { ValueInput } from "./styles";
import { MyWallet } from "../../components/Wallet";

export function Input(){

    return(
        <Container>
            <Header backgroundColor="#2BD06D" icon={<ArrowLeft size={24}/>}/>
            <Main>
                <ValueInput>
                    <MyWallet/>
                </ValueInput>

                <FormInput description={'Descrição'} value={'Lucro'} locale={'Local'} colorButton={'#2BD06D'}/>

                <FinancialData>
                    <ListaItens>
                        <Item icon={<Storefront size={32}/>} formPayament={'Cartão de crédito'} local={'Mercado'} value={12.20}/>
                    </ListaItens>
                </FinancialData>
            </Main>
        </Container>
    )
}