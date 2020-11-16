import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import cripto from './assets/crypto.png'
import { Form } from './components'
import { getCryptoFullData } from './api'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem
  }
`

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`

function App() {

  const [coin, selectCoin] = useState('')
  const [crypto, selectCrypto] = useState('')
  
  const [quoteResult, setQuoteResult] = useState({})

  useEffect(() => {
    
    if(coin.length === 0 || crypto.length === 0) return
    const getCryptoCoinsFullData = async () => {
      const data = await getCryptoFullData(coin, crypto)
      processApiData(data)
    }
    getCryptoCoinsFullData()

  }, [coin, crypto])

  const processApiData = apiData => {
    if (apiData.status === 200) {
      const { Response, Message } = apiData.data
      if (Response === 'Error') return alert(`Error: ${Message}`)
      const { DISPLAY } = apiData.data
      setQuoteResult(DISPLAY[crypto][coin])
    } else {
      setQuoteResult({})
      alert(`Error: ${apiData.statusText}`)
    }
  }

  return (
    <Container>
      <div>
        <Image src={ cripto } alt='Cripto image'/>
      </div>
      <div>
        <Heading>Quote Crypto instantly</Heading>
        <Form 
          selectCoin={ selectCoin }
          selectCrypto={ selectCrypto }/>
        {quoteResult && (
          <div>{ quoteResult.toString() }</div>
        )}
      </div>
    </Container>
  );
}

export default App;
