import React from 'react'
import styled from '@emotion/styled'
import { useCoin } from '../hooks'

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  width: 100%;
  border-radius: 10px;
  color: #FFF;

  &:hover {
    background-color: #326AC0;
    cursor: pointer;
  }
`

const Form = () => {

  const COINS = [
    { code: 'USD', name: 'Dolar de Estados Unidos' },
    { code: 'MXN', name: 'Peso Mexicano' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Libra Esterlina' }
  ]

  //using our custom hook
  const [coin, SelectCoins, updateCoin] = useCoin('', COINS)

  return (
    <form>
      <SelectCoins />
      <Button 
        type='submit'
        value='Calculate'></Button>
    </form>
  )
}

export { Form }