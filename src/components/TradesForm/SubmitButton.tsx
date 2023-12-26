
const SubmitButton = ( {type }: {type: boolean}) => {
    if (type) {
      return(
        <button
          type='submit'
          className='w-full h-9 text-sm font-semibold bg-slate-900 rounded-md hover:text-slate-300 active:bg-opacity-90'
        >
          Add Trade
        </button>
      )
    } else {
      return(
        <button
          type='submit'
          className='w-full h-9 text-sm font-semibold bg-slate-900 rounded-md hover:text-slate-300 active:bg-opacity-90'
        >
          Add Stream
        </button>
      )
    }
    
  }

export default SubmitButton