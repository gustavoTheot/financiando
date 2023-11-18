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
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SelectMonth } from '../../components/SelectMonth'
import { Header } from '../../components/header'
import { api } from '../../server/api'

export function Home() {
  const [name, setName] = useState<string>('')
  const [totalValue, setTotalValue] = useState<number>(0)
  const [inputValue, setInputValue] = useState<number>(0)
  const [outputValue, setOutputValue] = useState<number>(0)

  const { id } = useParams()

  async function fetchWallet() {
    try {
      const response = await api.get(`/wallet/${id}`)
      setName(response.data.name)
      setTotalValue(response.data.totalValue)
      setInputValue(response.data.inputValue)
      setOutputValue(response.data.outputValue)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchWallet()
  })

  return (
    <Container>
      <Header
        img={'https://avatars.githubusercontent.com/u/44641003?v=4'}
        time={'Bom dia'}
        name={name}
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
                <p>R${inputValue}</p>
              </div>
            </Up>

            <Down>
              <ArrowDown size={32} />

              <div>
                <span>Exit</span>
                <p>R${outputValue}</p>
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
              <Link to={`/input`}>
                <Button icon={<Vault size={32} />} description={'Guardado'} />
              </Link>
            </li>
            <li>
              <Link to={`/output`}>
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
