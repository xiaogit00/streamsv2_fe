import { SelectedStock, ErrorProps } from "../../types"
import { Field, useFormikContext } from "formik"

interface PriceLabelProps {
    tradeType: boolean, 
    selectedStock: SelectedStock | null,
    stockPrice: string | null
  }

const PriceLabel = ( {tradeType, selectedStock, stockPrice}: PriceLabelProps ) => {
    const {setFieldValue} = useFormikContext()

    return(
      <div id='row2Labels' className='flex text-xs font-bold justify-between'>
        <label htmlFor='price' className='w-44'>
          Unadjusted {tradeType ? 'Buy' : 'Sell'} Price {selectedStock ? `in ${selectedStock.currency}` : null}
        </label>
        <label htmlFor='price' className='text-xs font-light underline cursor-pointer' onClick={() => setFieldValue('price', stockPrice)}>
          {selectedStock ? selectedStock.currency : null}{stockPrice ? `$${stockPrice}` : null}
        </label>
      </div>
    )
  }
  
const PriceInput = ({errors, touched }: ErrorProps) => {
    return(
        <div id='row2Input' className='mb-1'>
        <Field
            name='price'
            type='number'
            className='w-full bg-transparent p-1 text-xs rounded-md border border-slate-700 outline-none focus:border-slate-600'
            autoComplete='off'
        />
        {errors.price && touched.price ? (
            <div className='errorMessage'>{errors.price}</div>
        ) : null}
        </div>
    )
}

export {
    PriceLabel,
    PriceInput
}