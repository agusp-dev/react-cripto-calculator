import Axios from 'axios'

const URL1 = 'https://min-api.cryptocompare.com/data/top/mktcapfull'
const URL2 = 'https://min-api.cryptocompare.com/data/pricemultifull'
const LIMIT = 10
const API_KEY = '193ec932d78f1b8eb33db8366595b4708f57ffbda05b0b9c3f44079f1f6a48c5'

export const getCryptoCoins = async () => {
  const formattedUrl = `${URL1}?limit=${LIMIT}&tsym=USD&api_key=${API_KEY}`
  const response = await Axios.get(formattedUrl)
  return response
}

export const getCryptoFullData = async (coinType, cryptoType) => {
  const formattedUrl = `${URL2}?fsyms=${cryptoType}&tsyms=${coinType ? coinType : 'USD'}`
  console.log(formattedUrl)
  const response = await Axios.get(formattedUrl)
  return response
}