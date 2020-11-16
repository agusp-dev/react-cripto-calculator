import Axios from 'axios'

const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull'
const LIMIT = 10
const API_KEY = '193ec932d78f1b8eb33db8366595b4708f57ffbda05b0b9c3f44079f1f6a48c5'

export const getCryptoCoins = async coinType => {
  const formattedUrl = `${URL}?limit=${LIMIT}&tsym=${coinType ? coinType : 'USD'}&api_key=${API_KEY}`
  const response = await Axios.get(formattedUrl)
  return response
}