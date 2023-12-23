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

export {
    SellingFromLabel,
    SellingFrom
}