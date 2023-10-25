import { Header } from "../../components/Header";
import { FinancialData, ListWallet, ListaItens, Main, WalletContainer } from "./styles";
import { Money, Storefront, Tag, Vault, Wallet } from "phosphor-react";
import { Button } from "../../components/ButtonMoney";
import { Container } from "../../styles/container";
import { Item } from "../../components/Item";
import { Link } from "react-router-dom";
import { MyWallet } from "../../components/Wallet";

export function Home(){
   

    return(
        <Container>
            <Header img={'https://avatars.githubusercontent.com/u/44641003?v=4'} time={"Bom dia"} name={"Gustavo Silva"}/>

            <Main>
                <WalletContainer>
                    <MyWallet/>
                    <ListWallet>
                        <li>
                            <Button icon={<Wallet size={32} />} description={'Carteira'}/>
                        </li>
                        <li>
                            <Link to={'/input'}>
                                <Button icon={<Vault size={32} />} description={'Guardado'}/>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/output'}>
                                <Button icon={<Tag size={32} />} description={'Compras'}/>
                            </Link>
                        </li>
                        <li>
                            <Button icon={<Money size={32} />} description={'Investido'}/>
                        </li>
                    </ListWallet>
                </WalletContainer>

                <FinancialData>
                    <ListaItens>
                        <Item icon={<Storefront size={32}/>} formPayament={'Cartão de crédito'} local={'Mercado'} value={12.20}/>
                    </ListaItens>
                </FinancialData>
            </Main>
        </Container>
    )
}