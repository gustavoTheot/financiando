import {
  AboutWallet,
  Box,
  Circle,
  Description,
  GenerealExpenses,
  Icon,
  Main,
  Options,
  Spent,
  Value,
} from './styles'
import {
  ArrowDown,
  ArrowUp,
  Cardholder,
  CaretLeft,
  CaretRight,
  Money,
  ShoppingCart,
  Storefront,
  Vault,
  Wallet,
} from 'phosphor-react'

import { Container } from '../../styles/container'
import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Header } from '../../components/header'
import { api } from '../../server/api'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { SelectMonthContainer } from '../../components/SelectMonth/styles'
import { Basket } from '@phosphor-icons/react'

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
      perView: 4,
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

        <AboutWallet>
          <Box>
            <div className="total">
              <h4>Total</h4>
              <h2>R$ {totalValue}</h2>
              <span>Referente a esse mês</span>
            </div>
          </Box>

          <Box>
            <div className="register">
              <div className="title">
                <h4>Entradas</h4>
                <ArrowUp size={20} color="#2BD06D" />
              </div>
              <span>R$ {inputValue}</span>
            </div>
          </Box>

          <Box>
            <div className="register">
              <div className="title">
                <h4>Entradas</h4>
                <ArrowDown size={20} color="#FF5D47" />
              </div>

              <span>R$ {outputValue}</span>
            </div>
          </Box>

          <Box>
            <div className="total">
              <h4>Carteira</h4>
              <h2>R$ {totalValue}</h2>
              <span>Valor total na carteira</span>
            </div>
          </Box>
        </AboutWallet>

        <Options>
          <ul>
            <li>
              <Link to={''}>
                <Circle>
                  <Wallet size={32} color="#F8F8F8" />
                </Circle>
                <span>Carteira</span>
              </Link>
            </li>
            <li>
              <Link to={''}>
                <Circle>
                  <Vault size={32} color="#F8F8F8" />
                </Circle>
                <span>Guardado</span>
              </Link>
            </li>
            <li>
              <Link to={''}>
                <Circle>
                  <Money size={32} color="#F8F8F8" />
                </Circle>
                <span>Investido</span>
              </Link>
            </li>
            <li>
              <Link to={''}>
                <Circle>
                  <Basket size={32} />
                </Circle>
                <span>Compras</span>
              </Link>
            </li>
            <li>
              <Link to={''}>
                <Circle>
                  <Storefront size={32} color="#F8F8F8" />
                </Circle>
                <span>Mercado</span>
              </Link>
            </li>
            <li>
              <Link to={''}>
                <Circle>
                  <Cardholder size={32} color="#F8F8F8" />
                </Circle>
                <span>Cartões</span>
              </Link>
            </li>
          </ul>
        </Options>

        <Spent>
          <GenerealExpenses>
            <h3>Gastos fixos</h3>

            <ul>
              <li>
                <Icon>
                  <ShoppingCart size={24} />{' '}
                </Icon>
                <Description>
                  <h6>Mercado</h6>
                  <span>Cartão de crédito</span>
                </Description>
                <Value>R$ 20,00</Value>
              </li>
            </ul>
          </GenerealExpenses>

          <GenerealExpenses>
            <h3>Gastos alternativos</h3>

            <ul>
              <li></li>
            </ul>
          </GenerealExpenses>
        </Spent>
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
