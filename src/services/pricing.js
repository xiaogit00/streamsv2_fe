import axios from "axios";

export const getStockPrice = (ticker) => {
  return axios.get(`https://financialmodelingprep.com/api/v3/quote-short/${ticker}?apikey=${process.env.REACT_APP_FMP_APIKEY}`)
}