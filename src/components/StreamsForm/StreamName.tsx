import { ErrorProps } from "../../types"
import { Field } from "formik"

const StreamLabel = () => {
    return(
        <div id='row2Labels' className='flex text-xs font-bold'>
            <label htmlFor='streamName' className='w-44'>
                Stream Name
            </label>
        </div>
            
    )
}

const StreamName = ({errors, touched }: ErrorProps) => {
    return(
        <div id='row2Input' className='mb-1'>
            <Field
            name='stream_name'
            type='text'
            className='w-full bg-transparent p-1 text-xs rounded-md border border-slate-700 outline-none focus:border-slate-600'
            autoComplete='off'
            />
            {errors.stream_name && touched.stream_name ? (
            <div className='errorMessage'>{errors.stream_name}</div>
            ) : null}
        </div>
    )
}

export {
    StreamLabel, 
    StreamName
}