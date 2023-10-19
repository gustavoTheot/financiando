import { Header } from "../../components/Header";
import { Description, FinancialData, FinancialShares, ItemFinancialShares, ListWallet, ListaItens, Main, WalletContainer } from "./styles";
import { SignOut, Storefront, UploadSimple, Wallet } from "phosphor-react";
import { Button } from "../../components/ButtonMoney";
import { Container } from "../../styles/container";
import { Item } from "../../components/Item";
import { Link } from "react-router-dom";

export function Home(){
    return(
        <Container>
            <Header img={'https://avatars.githubusercontent.com/u/44641003?v=4'} time={"Bom dia"} name={"Gustavo Silva"}/>

            <Main>
                <WalletContainer>
                    <Description>
                        <span>Total</span>
                        <h1>R$ 1000,00</h1>
                    </Description>
                    <ListWallet>
                        <li>
                            <Button icon={<Wallet size={32} />} description={'Nubank'}/>
                        </li>
                        <li>
                            <Button icon={<Wallet size={32} />} description={'Bradesco'}/>
                        </li>
                    </ListWallet>
                </WalletContainer>

                <FinancialShares>
                    <Link to={'/input'}>
                        <ItemFinancialShares>
                            <div>
                                <UploadSimple size={32}/>
                            </div>
                            <span>Entradas</span>
                        </ItemFinancialShares>
                    </Link>
                    <Link to={''}>
                        <ItemFinancialShares>
                            <div>
                                <SignOut size={32}/>
                            </div>
                            <span>Entradas</span>
                        </ItemFinancialShares>
                    </Link>
                    
                </FinancialShares>

                <FinancialData>
                    <ListaItens>
                        <Item icon={<Storefront size={32}/>} formPayament={'Cartão de crédito'} local={'Mercado'} value={12.20}/>
                    </ListaItens>
                </FinancialData>
            </Main>
        </Container>
    )
}