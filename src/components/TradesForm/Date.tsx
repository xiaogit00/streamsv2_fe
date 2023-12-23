import { ErrorProps } from "../../types"
import { Field } from "formik"



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


export {
    DateTypeLabels,
    DateSelector
}