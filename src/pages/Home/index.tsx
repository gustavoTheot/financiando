import { Header } from '../../components/Header'
import {
  Description,
  Down,
  FinancialData,
  ListWallet,
  ListaItens,
  Main,
  MoneyContainer,
  TotalValue,
  Up,
  WalletContainer,
} from './styles'
import {
  ArrowDown,
  ArrowUp,
  Money,
  Storefront,
  Tag,
  Vault,
  Wallet,
} from 'phosphor-react'
import { Button } from '../../components/ButtonMoney'
import { Container } from '../../styles/container'
import { Item } from '../../components/Item'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FinancialContext } from '../../context/FinancialContext'
import { SelectMonth } from '../../components/SelectMonth'

export function Home() {
  const { id, totalValue } = useContext(FinancialContext)

  return (
    <Container>
      <Header
        img={'https://avatars.githubusercontent.com/u/44641003?v=4'}
        time={'Bom dia'}
        name={'Gustavo Silva'}
      />

      <Main>
        <SelectMonth />

        <MoneyContainer>
          <TotalValue>
            <span>Total</span>
            {totalValue < 0 ? (
              <h1>R$ - {totalValue}</h1>
            ) : (
              <h1>R$ {totalValue}</h1>
            )}
          </TotalValue>
          <Description>
            <Up>
              <ArrowUp size={32} />

              <div>
                <span>Enter</span>
                <p>R${20.0}</p>
              </div>
            </Up>

            <Down>
              <ArrowDown size={32} />

              <div>
                <span>Exit</span>
                <p>R${10.0}</p>
              </div>
            </Down>
          </Description>
        </MoneyContainer>

        <WalletContainer>
          <ListWallet>
            <li>
              <Button icon={<Wallet size={32} />} description={'Carteira'} />
            </li>
            <li>
              <Link to={`/input/${id}`}>
                <Button icon={<Vault size={32} />} description={'Guardado'} />
              </Link>
            </li>
            <li>
              <Link to={`/output/${id}`}>
                <Button icon={<Tag size={32} />} description={'Compras'} />
              </Link>
            </li>
            <li>
              <Button icon={<Money size={32} />} description={'Investido'} />
            </li>
          </ListWallet>
        </WalletContainer>

        <FinancialData>
          <ListaItens>
            <Item
              icon={<Storefront size={32} />}
              formPayament={'Cartão de crédito'}
              local={'Mercado'}
              value={12.2}
            />
          </ListaItens>
        </FinancialData>
      </Main>
    </Container>
  )
}
