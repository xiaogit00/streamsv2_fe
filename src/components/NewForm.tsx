import { Formik, Field, Form } from 'formik'
import { useEffect, useState } from 'react'
import StockSelector from './StockSelector'
import { initialStreamFormValues, initialTradeFormValues } from '../utils/initialValues'
import { StreamSchema, TradeSchema } from '../utils/yupSchema'
import { ActiveTab, NewStreamWithTrades, NewTrade, SelectedStock } from '../types'
import StockDisplay from './TradesForm/StockDisplay'
import { SellingFrom, SellingFromLabel } from './TradesForm/SellTrades'
import { DateTypeLabels, DateSelector } from './TradesForm/Date'
import TradeTypeButtons from './TradesForm/TradeTypeButtons'
import { QtyLabel, QtyInput } from './TradesForm/Qty'
import { PriceLabel, PriceInput } from './TradesForm/Price'
import { FeesInput, FeesLabel } from './TradesForm/Fees'
import AdditionalOptions from './TradesForm/AdditionalOptions'
import SubmitButton from './TradesForm/SubmitButton'
import { StreamName, StreamLabel } from './StreamsForm/StreamName'
import { AssignTrades, AssignTradesLabel } from './StreamsForm/AssignTrades'
import TabsSelector from './TabsSelector'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const NewForm = ({ setActiveTab }: {setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>}) => {
  const [tradeType, setTradeType] = useState<boolean>(true)
  const [selectedStock, setSelectedStock] = useState<SelectedStock | null>(null) 
  const [matchingBuyTradeId, setmatchingBuyTradeId] = useState<string | null>(null)
  const [matchingBuyTradeRequired, setmatchingBuyTradeRequired] = useState<boolean>(false)
  const [stockPrice, setStockPrice] = useState<string | null>(null)
  const [inputRequired, setInputRequired] = useState<boolean>(false)
  const [isTradeActive, setIsTradeActive] = useState<boolean>(true)
  
  const queryClient = useQueryClient()

  const createTradeMutation = useMutation({
    mutationFn: async (newTrade: NewTrade) => {
      return axios.post(process.env.REACT_APP_BACKEND_URL + '/api/trades', newTrade)
    }, 
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['trades']}),
    mutationKey: ['newTrade']
  })

  const createStreamAndAssignMutation = useMutation({
    mutationFn: async (newStream: NewStreamWithTrades) => {
      console.log("createStreamandAssign is called")
        const res = await axios.post(process.env.REACT_APP_BACKEND_URL + '/api/streams', newStream)
        const streamId = res.data.id
        const bulkAssignPayload = {
            stream_id: streamId,
            trades: newStream.trades
        }
        return axios.post(process.env.REACT_APP_BACKEND_URL + '/api/stream-trades/bulk-assign', bulkAssignPayload)
    }, 
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['streams']}),
    mutationKey: ['newStream']
    })

  const createStreamMutation = useMutation({
    mutationFn: async (newStream) => {
      console.log("createStream is called")
        return axios.post(process.env.REACT_APP_BACKEND_URL + '/api/streams', newStream)
    }, 
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['streams']}),
    mutationKey: ['newStream']
    })

  const submitTradeHandler = async (values: any) => {
    if (!selectedStock) {
      setInputRequired(true)
      return
    } else setInputRequired(false)

    if (!tradeType && !matchingBuyTradeId) {
      setmatchingBuyTradeRequired(true)
      return
    } else setmatchingBuyTradeRequired(false)

    const {price, qty, exchange_fees} = values
    const cost = Number(price) * Number(qty)
    values = {
      ...values,
      type: tradeType,
      cost,
      name: selectedStock.name,
      ticker: selectedStock.symbol,
      currency: selectedStock.currency,
      exchange: selectedStock.exchangeShortName,
      exchange_fees: exchange_fees === '' ? 0 : exchange_fees,
      close_id: matchingBuyTradeId ? matchingBuyTradeId : null
    }
    createTradeMutation.mutate(values)
    setActiveTab(ActiveTab.Holdings)
  }

  const submitStreamHandler = async (values: any) => {
    if (!selectedStock) {
      setInputRequired(true)
      return
    } else setInputRequired(false)
    
    values = {
      ...values,
      ticker: selectedStock.symbol,
      currency: selectedStock.currency,
      exchange: selectedStock.exchangeShortName
    }
    if (values.trades.length > 0) {
      createStreamAndAssignMutation.mutate(values)
      setActiveTab(ActiveTab.Streams)
    } else {
      createStreamMutation.mutate(values)
      setActiveTab(ActiveTab.Streams)
    }
  }

  return(
    <div id='tradesForm' className='mt-auto flex flex-col py-2 text-neutral-400'>
      <StockSelector 
        setSelectedStock={setSelectedStock} 
        inputRequired={inputRequired}
        setInputRequired={setInputRequired}
      />
      <TabsSelector isTradeActive={isTradeActive} setIsTradeActive={setIsTradeActive}/>
      <StockDisplay 
        selectedStock={selectedStock}
        stockPrice={stockPrice}
        setStockPrice={setStockPrice}
      />

      {isTradeActive 
      ? (
        <TradeForm 
          submitTradeHandler={submitTradeHandler}
          tradeType={tradeType}
          setTradeType={setTradeType}
          selectedStock={selectedStock}
          stockPrice={stockPrice}
          setmatchingBuyTradeId={setmatchingBuyTradeId}
          matchingBuyTradeRequired={matchingBuyTradeRequired}
          setmatchingBuyTradeRequired={setmatchingBuyTradeRequired}
          isTradeActive={isTradeActive}
        />
      )
      : (
        <StreamForm 
          submitStreamHandler={submitStreamHandler} 
          selectedStock={selectedStock} 
          isTradeActive={isTradeActive}
        />
      )}
      
    </div>
  )
}
export default NewForm

interface TradeFormProps {
  submitTradeHandler: any,
  tradeType: boolean
  setTradeType: React.Dispatch<React.SetStateAction<boolean>>,
  selectedStock: SelectedStock | null,
  stockPrice: string | null,
  setmatchingBuyTradeId: React.Dispatch<React.SetStateAction<string | null>>,
  matchingBuyTradeRequired: boolean,
  setmatchingBuyTradeRequired: React.Dispatch<React.SetStateAction<boolean>>,
  isTradeActive: boolean
}

const TradeForm = (props: TradeFormProps) => {
  const {submitTradeHandler, tradeType, setTradeType, selectedStock, stockPrice, setmatchingBuyTradeId, matchingBuyTradeRequired, setmatchingBuyTradeRequired, isTradeActive} = props
  return (
    <Formik initialValues={initialTradeFormValues} validationSchema={TradeSchema} onSubmit={submitTradeHandler}>
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
                <SellingFrom 
                  selectedStock={selectedStock} 
                  setmatchingBuyTradeId={setmatchingBuyTradeId}
                  matchingBuyTradeRequired={matchingBuyTradeRequired}
                  setmatchingBuyTradeRequired={setmatchingBuyTradeRequired}
                />
              </>
            )}
            <AdditionalOptions />
            <SubmitButton type={isTradeActive} />
          </Form>
        )}
      </Formik>
  )
}

interface StreamFormProps {
  submitStreamHandler: (values: any) => Promise<void>,
  selectedStock: SelectedStock | null,
  isTradeActive: boolean
}
const StreamForm = ({ submitStreamHandler, selectedStock, isTradeActive }: StreamFormProps) => {
  return(
    <Formik initialValues={initialStreamFormValues} validationSchema={StreamSchema} onSubmit={submitStreamHandler}>
        {({ errors, touched }) => (
          <Form className='m-2 flex flex-col gap-2'>
            <StreamLabel />
            <StreamName errors={errors} touched={touched}/>
            <AssignTradesLabel />
            <AssignTrades selectedStock={selectedStock}/>
            {errors.trades && touched.trades ? (
              <div className='errorMessage -mt-2'>{errors.trades}</div>
            ) : null}
            <SubmitButton type={isTradeActive}/>
          </Form>
        )}
        
      </Formik>
  )
}