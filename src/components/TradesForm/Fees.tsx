import { ErrorProps } from "../../types"
import { Field } from "formik"

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
            autoComplete='off'
        />
        {errors.exchange_fees && touched.exchange_fees ? (
            <div className='errorMessage'>{errors.exchange_fees}</div>
        ) : null}
        </div>
    )
}

export {
    FeesLabel,
    FeesInput
}