import { useContext } from "react"
import { ShepherdTourContext } from "react-shepherd"

const SubmitButton = ( {type }: {type: boolean}) => {
    const tour = useContext(ShepherdTourContext)
    if (type) {
      return(
        <button
          id='trade-submit-button'
          onClick={() => tour?.hide()}
          type='submit'
          className='w-full h-9 text-sm font-semibold bg-slate-900 rounded-md hover:text-slate-300 active:bg-opacity-90'
        >
          Add Trade
        </button>
      )
    } else {
      return(
        <button
          id='stream-submit-button'
          type='submit'
          className='w-full h-9 text-sm font-semibold bg-slate-900 rounded-md hover:text-slate-300 active:bg-opacity-90'
        >
          Add Stream
        </button>
      )
    }
    
  }

export default SubmitButton