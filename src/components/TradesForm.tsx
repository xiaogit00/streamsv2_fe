import { Formik, Field, Form } from 'formik'
import { useEffect, useState } from 'react'
import StockSelector from './StockSelector'
import { initialTradeFormValues } from '../utils/initialValues'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { TradeSchema } from '../utils/yupSchema'
import { SelectedStock } from '../types'
import StockDisplay from './TradesForm/StockDisplay'
import { SellingFrom, SellingFromLabel } from './TradesForm/SellTrades'
import { DateTypeLabels, DateSelector } from './TradesForm/Date'
import TradeTypeButtons from './TradesForm/TradeTypeButtons'
import { QtyLabel, QtyInput } from './TradesForm/Qty'
import { PriceLabel, PriceInput } from './TradesForm/Price'
import { FeesInput, FeesLabel } from './TradesForm/Fees'
import AdditionalOptions from './TradesForm/AdditionalOptions'
import SubmitButton from './TradesForm/SubmitButton'

const TradesForm = () => {
  const [tradeType, setTradeType] = useState<boolean>(true)
  const [selectedStock, setSelectedStock] = useState<SelectedStock | null>(null) 
  const [stockPrice, setStockPrice] = useState<string | null>(null)
  const [inputRequired, setInputRequired] = useState<boolean>(false)
  
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (newTrade) => {
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulating delay 
      return axios.post(process.env.REACT_APP_BACKEND_URL + '/api/trades', newTrade)
    }, 
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['trades']}),
    mutationKey: ['newTrade']
  })

  const submitHandler = async (values: any) => {
    if (!selectedStock) {
      setInputRequired(true)
      return
    } else {
      setInputRequired(false)
    }
    const {price, qty} = values
    const cost = Number(price) * Number(qty)
    values = {
      ...values,
      type: tradeType,
      cost,
      name: selectedStock.name,
      ticker: selectedStock.symbol,
      currency: selectedStock.currency,
      exchange: selectedStock.exchangeShortName
    }
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    // alert(JSON.stringify(values, null, 2))
    mutation.mutate(values)
  }

  return(
    <div id='tradesForm' className='mt-auto flex flex-col py-2 text-neutral-400'>
      <StockSelector 
        setSelectedStock={setSelectedStock} 
        inputRequired={inputRequired}
        setInputRequired={setInputRequired}
      />
      <StockDisplay 
        selectedStock={selectedStock}
        stockPrice={stockPrice}
        setStockPrice={setStockPrice}
      />

      <Formik initialValues={initialTradeFormValues} validationSchema={TradeSchema} onSubmit={submitHandler}>
        {({ errors, touched }) => (
          <Form className='m-2 flex flex-col gap-2'>
            <DateTypeLabels />
            <div id='row1Input' className='flex items-start pt-1 gap-4'>
              <DateSelector errors={errors} touched={touched}/>
              <TradeTypeButtons tradeType={tradeType} setTradeType={setTradeType}/>
            </div>
            <QtyLabel tradeType={tradeType}/>
            <QtyInput errors={errors} touched={touched}/>
            <PriceLabel tradeType={tradeType} selectedStock={selectedStock} stockPrice={stockPrice}/>
            <PriceInput errors={errors} touched={touched}/>
            <FeesLabel />
            <FeesInput errors={errors} touched={touched}/>
            {!tradeType && (
              <>
                <SellingFromLabel />
                <SellingFrom />
              </>
            )}
            <AdditionalOptions />
            <SubmitButton />
          </Form>
        )}
        
      </Formik>
      
    </div>
  )
}
export default TradesForm


