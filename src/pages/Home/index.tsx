import { Header } from "../../components/Header";
import { Description, FinancialData, FinancialShares, ListWallet, Main, WalletContainer } from "./styles";
import { Wallet } from "phosphor-react";
import { Button } from "../../components/Button";
import { Container } from "../../styles/container";

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
                    
                </FinancialShares>

                <FinancialData>
                    
                </FinancialData>
            </Main>
        </Container>
    )
}