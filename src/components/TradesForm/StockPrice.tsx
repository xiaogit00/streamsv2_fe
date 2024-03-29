import { useState, useEffect } from "react"
import Spinner from "../Spinner"
import { getStockPrice } from "../../services/pricing"

const StockPrice = ({ ticker, currency, stockPrice, setStockPrice }: StockPriceProps) => {
  
    const [loading, setLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
  
    useEffect(() => {
      setLoading(true)
      
      getStockPrice(ticker)
        .then((res: any) => {
          if (res.data.length > 0) {
            setIsError(false)
            setStockPrice(res.data[0].price)
          } else {
            setIsError(true)
          }
          setLoading(false)
        })
        .catch((err: any) => {
          console.log("Error fetching prices:\n", err.message)
        })
    }, [ticker])
    if (loading) return <Spinner />
    if (isError) return <p>error</p>
    return <div>{currency}${stockPrice}</div>
  }

export default StockPrice

interface StockPriceProps {
ticker: string
currency: string
stockPrice: string | null,
setStockPrice: React.Dispatch<string>
}