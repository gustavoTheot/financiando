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
  CaretLeft,
  CaretRight,
} from 'phosphor-react'

import { Button } from '../../components/ButtonMoney'
import { Container } from '../../styles/container'
import { Item } from '../../components/Item'
import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Header } from '../../components/header'
import { api } from '../../server/api'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { SelectMonthContainer } from '../../components/SelectMonth/styles'

interface ArrowProps {
  disabled: boolean
  left?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (e: any) => void
}

export function Home() {
  const [name, setName] = useState<string>('')
  const [totalValue, setTotalValue] = useState<number>(0)
  const [inputValue, setInputValue] = useState<number>(0)
  const [outputValue, setOutputValue] = useState<number>(0)
  const [currentSlide, setCurrentSlide] = React.useState(1)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      origin: 'center',
      perView: 3,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel + 1)
    },
    created() {
      setLoaded(true)
    },
  })

  const { id } = useParams()
  if (id !== undefined) {
    localStorage.setItem('id', id)
  }

  async function fetchWallet() {
    try {
      const response = await api.get(`/wallet/${id}`, {
        params: { month: currentSlide },
      })
      setName(response.data.name)
      setTotalValue(response.data.totalValue)
      setInputValue(response.data.inputValue)
      setOutputValue(response.data.outputValue)
    } catch (error) {
      alert(error)
    }
  }

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Dezember',
  ]

  useEffect(() => {}, [currentSlide])

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
        <div>
          <SelectMonthContainer>
            <div ref={sliderRef}>
              <ul className="keen-slider">
                {months.map((month, index) => (
                  <li
                    key={index}
                    className={`keen-slider__slide number-slide${index + 1} ${
                      index + 1 === currentSlide ? 'centered-month' : ''
                    }`}
                  >
                    {month}
                  </li>
                ))}
              </ul>
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 1}
                />

                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={currentSlide === instanceRef.current.size}
                />
              </>
            )}
          </SelectMonthContainer>
        </div>
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

function Arrow({ disabled, left, onClick }: ArrowProps) {
  const disabeld = disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={onClick}
      className={`arrow ${left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left && <CaretLeft />}
      {!left && <CaretRight />}
    </svg>
  )
}
