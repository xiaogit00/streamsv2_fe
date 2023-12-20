import { Formik, Field, Form } from 'formik'
import { useState } from 'react'
import { initialTradeFormValues } from '../utils/initialValues'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import * as Yup from 'yup';

const TradesForm = () => {
  const [tradeType, setTradeType] = useState<boolean>(true)

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
    const {price, qty} = values
    const cost = Number(price) * Number(qty)
    values = {
      ...values,
      type: tradeType,
      cost
    }
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    // alert(JSON.stringify(values, null, 2))
    mutation.mutate(values)
  }

  const TradeSchema = Yup.object().shape({
    date: Yup.date()
      .required('*Required')
      .typeError('*Please enter a valid date.'),
    qty: Yup.number()
      .required('*Required')
      .typeError('*Amount must be a number.'),
    price: Yup.number()
      .required('*Required')
      .typeError('*Price must be a number.'),
    exchange_fees: Yup.number()
      .typeError('*Fees must be a number.'),
  });

  return(
    <div id='tradesForm' className='mt-auto flex flex-col py-2 text-neutral-400'>
      <StockSelector />
      <StockDisplay />

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
            <PriceLabel tradeType={tradeType}/>
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

const SellingFromLabel = () => {
  return(
    <div id='row4Labels' className='flex text-xs font-bold'>
      <label htmlFor='closeId' className='w-44'>
        Selling From
      </label>
    </div>
  )
}

const SellingFrom = () => {
  return(
    <div id='sellingFrom' className='h-24 bg-slate-900 overflow-y-auto scrollbar rounded-md border border-slate-700 flex flex-col text-[0.7em]'>
      <div className='px-2 p-1 h-6 flex justify-between items-center hover:bg-slate-700 cursor-pointer'>
        <span>Xiaomi</span>
        <span>$20.80</span>
        <span>16 Sep 2023</span>
        <span>120 shares</span>
      </div>
    </div>
  )
}

interface ErrorProps {
  errors: any,
  touched: any
}
const StockSelector = () => {
  return(
    <input
        id='tickerSearch'
        placeholder='Enter asset name/ticker'
        className='bg-slate-700 outline-none mx-2  text-sm p-1'
      />
  )
}

const StockDisplay = () => {
  return(
    <div id='stockData' className='flex flex-col my-2 bg-slate-700 p-2'>
      <div id='firstRow' className='flex justify-between text-base font-semibold'>
        <div>1810.hk</div>
        <div>HK$15.16</div>
      </div>
      <div id='secondRow' className='flex justify-between text-xs mb-1'>
        <div className='w-40'>Xiaomi Corporation - Ordinary Shares - Class B</div>
        <div>on Dec 5 2023</div>
      </div>
    </div>
  )
}


const DateTypeLabels = () => {
  return(
    <div id='row1Labels' className='flex text-xs font-bold'>
      <label htmlFor='date' className='w-40'>
        Trade Date
      </label>
      <label htmlFor='type' className=''>
        Type
      </label>
    </div>
  )
}

const DateSelector = ({errors, touched }: ErrorProps) => {
  return(
    <div className='flex flex-col'>
      <Field
        name='date'
        type='date'
        className='mb-1 bg-transparent w-36 p-1 text-xs rounded-md border border-slate-700 outline-none focus:border-slate-600'
      />
    {errors.date && touched.date ? (
              <div className='errorMessage'>{errors.date}</div>
            ) : null}
    </div>
    
  )
}
interface TradeTypeProps {
  tradeType: boolean,
  setTradeType: React.Dispatch<React.SetStateAction<boolean>>
}
const TradeTypeButtons = ({ tradeType, setTradeType }: TradeTypeProps) => {
  
  return(
    <div id='typeButtons' className='flex items-center text-xs gap-2 '>
      <div
        id='activeButton'
        className={`w-12 h-6 p-1 text-center flex flex-col justify-center cursor-pointer rounded-2xl ${tradeType ? 'bg-[#A1E66E] text-slate-900 hover:text-slate-700': 'bg-slate-700 border-slate-400 border hover:text-slate-50'}`}
        onClick={() => setTradeType(true)}
      >
        <span>Buy</span>
      </div>
      <div
        id='allButton'
        className={`w-12 h-6 p-1 text-center flex flex-col justify-center cursor-pointer rounded-2xl  ${tradeType ? 'bg-slate-700 border-slate-400 border hover:text-slate-50': 'bg-[#A1E66E] text-slate-900 hover:text-slate-700'}`}
        onClick={() => setTradeType(false)}
      >
        <span>Sell</span>
      </div>
    </div>
  )
}

const QtyLabel = ( {tradeType}: {tradeType: boolean} ) => {
  return(
    <div id='row2Labels' className='flex text-xs font-bold'>
      <label htmlFor='qty' className='w-44'>
        Amount {tradeType ? 'Bought' : 'Sold'}
      </label>
    </div>
  )
}

const QtyInput = ( {errors, touched }: ErrorProps) => {
  return(
    <div id='row2Input' className='mb-1'>
      <Field
        name='qty'
        type='text'
        className='w-full bg-transparent p-1 text-xs rounded-md border border-slate-700 outline-none focus:border-slate-600'
      />
      {errors.qty && touched.qty ? (
        <div className='errorMessage'>{errors.qty}</div>
      ) : null}
    </div>
  )
}

const PriceLabel = ( {tradeType}: {tradeType: boolean} ) => {
  return(
    <div id='row2Labels' className='flex text-xs font-bold justify-between'>
      <label htmlFor='price' className='w-44'>
        Unadjusted {tradeType ? 'Buy' : 'Sell'} Price in HKD
      </label>
      <label htmlFor='price' className='text-xs font-light underline cursor-pointer'>
        HK$15.16
      </label>
    </div>
  )
}

const PriceInput = ({errors, touched }: ErrorProps) => {
  return(
    <div id='row2Input' className='mb-1'>
      <Field
        name='price'
        type='text'
        className='w-full bg-transparent p-1 text-xs rounded-md border border-slate-700 outline-none focus:border-slate-600'
      />
      {errors.price && touched.price ? (
        <div className='errorMessage'>{errors.price}</div>
      ) : null}
    </div>
  )
}

const FeesLabel = () => {
  return(
    <div id='row3Labels' className='flex text-xs font-bold'>
      <label htmlFor='exchange_fees' className='w-44'>
        Exchange/Transaction Fee
      </label>
    </div>
  )
}

const FeesInput = ({errors, touched }: ErrorProps) => {
  return(
    <div id='row3Input' className='mb-1'>
      <Field
        name='exchange_fees'
        type='text'
        className='w-full bg-transparent p-1 text-xs rounded-md border border-slate-700 outline-none focus:border-slate-600'
      />
      {errors.exchange_fees && touched.exchange_fees ? (
        <div className='errorMessage'>{errors.exchange_fees}</div>
      ) : null}
    </div>
  )
}


const AdditionalOptions = () => {
  return(
    <div id='row4Labels' className='flex text-xs font-bold'>
      <label htmlFor='options' className='cursor-pointer'>
        + Additional Options
      </label>
    </div>
  )
}

const SubmitButton = () => {
  return(
    <button
      type='submit'
      className='w-full h-9 text-sm font-semibold bg-slate-900 rounded-md hover:text-slate-300 active:bg-opacity-90'
    >
      Add Transaction
    </button>
  )
}