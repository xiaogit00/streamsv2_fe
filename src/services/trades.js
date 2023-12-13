import axios from 'axios'

const getTrades = async () => {
  const res = await axios.get('http://localhost:3001/api/trades')
  return res.data
}

export { getTrades }
