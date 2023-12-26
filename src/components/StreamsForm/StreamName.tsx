import { ErrorProps } from "../../types"
import { Field } from "formik"

const StreamLabel = () => {
    return(
        <div id='row2Labels' className='flex text-xs font-bold'>
            <label htmlFor='streamName' className='w-44'>
                Stream Name (Optional)
            </label>
        </div>
            
    )
}

const StreamName = ({errors, touched }: ErrorProps) => {
    return(
        <div id='row2Input' className='mb-1'>
            <Field
            name='streamName'
            type='text'
            className='w-full bg-transparent p-1 text-xs rounded-md border border-slate-700 outline-none focus:border-slate-600'
            autoComplete='off'
            />
            {errors.qty && touched.qty ? (
            <div className='errorMessage'>{errors.qty}</div>
            ) : null}
        </div>
    )
}

export {
    StreamLabel, 
    StreamName
}