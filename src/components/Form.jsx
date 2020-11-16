import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useCoin, useCrypto } from '../hooks'
import { getCryptoCoins } from '../api'
import { Error } from '.'
import PropTypes from 'prop-types'

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

const Form = ({ selectCoin, selectCrypto, showLoading }) => {

  const COINS = [
    { code: 'USD', name: 'Dolar de Estados Unidos' },
    { code: 'MXN', name: 'Peso Mexicano' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Libra Esterlina' }
  ]

  const [cryptoList, setCryptoList] = useState([])
  const [error, showError] = useState('')
 
  //using our customs hook
  const [coin, SelectCoins, updateCoin] = useCoin('', COINS)
  const [crypto, SelectCrypto, updateCrypto] = useCrypto('', cryptoList)

  useEffect(() => {
    const getApiData = async () => {
      const data = await getCryptoCoins('')
      processApiData(data)
    }
    getApiData()
  }, [])

  const processApiData = apiData => {
    if (apiData.status === 200) {
      const { Message, Data } = apiData.data
      if (Message != 'Success') return alert(`Error: ${Message}`)
      setCryptoList( Data )
    } else {
      alert(`Error: ${apiData.statusText}`)
    }
  }

  const onHandleSubmit = e =>  {
		e.preventDefault()
		showLoading(true)
		selectCoin('')
		selectCrypto('')
		
		setTimeout(() => {
			if (coin.length === 0 || crypto.length === 0) {
				showLoading(false)
				return showError('Please, select coin and crypto.')
			}
			showError('')
			selectCoin(coin)
			selectCrypto(crypto)
			showLoading(false)
		}, 2000)
  }

  return (
    <form onSubmit={ onHandleSubmit }>
      {error && (
        <Error message={ error }/>
      )}
      <SelectCoins />
      <SelectCrypto />
      <Button 
        type='submit'
        value='Calculate'></Button>
    </form>
  )
}

Form.propTypes = {
  selectCoin: PropTypes.func.isRequired,
	selectCrypto: PropTypes.func.isRequired,
	showLoading: PropTypes.func.isRequired
}

export { Form }