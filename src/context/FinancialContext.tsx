import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../server/api'

interface FinancialContextProviderProps {
  children: ReactNode
}

interface FinancialContextProps {
  id?: string
  totalValue: number
  inputValue?: number
  outputValue?: number
}

export const FinancialContext = createContext({} as FinancialContextProps)

export function FinancialProvider({ children }: FinancialContextProviderProps) {
  const [id, setId] = useState<string>()
  const [totalValue, setTotalValue] = useState<number>(0)

  async function fetchApi() {
    try {
      const response = await api.get('/wallet')
      response.data.map((item: FinancialContextProps) => {
        setId(item.id)
        setTotalValue(item.totalValue)
      })
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <FinancialContext.Provider value={{ id, totalValue }}>
      {children}
    </FinancialContext.Provider>
  )
}
