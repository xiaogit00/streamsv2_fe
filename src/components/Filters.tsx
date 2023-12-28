const Filters = () => {

  const featureComingSoon = () => {
    alert("Feature coming soon!")
  }
  return (
    <div id='filters' className='h-12 flex items-center gap-4'>
      <div
        id='sizeFilterContainer'
        className='m-2 p-2 h-6 flex items-center text-slate-400 bg-slate-600 text-xs rounded-lg'
      >
        <div id='activeButton' className='w-12 text-center cursor-pointer hover:text-slate-50' onClick={featureComingSoon}>
          Size
        </div>
        <div id='allButton' className='w-12 text-center cursor-pointer hover:text-slate-50' onClick={featureComingSoon}>
          Recent
        </div>
      </div>
      <button
        id='assetClassDropdown'
        data-dropdown-toggle='dropdown'
        className='text-slate-400 border border-slate-300 border-opacity-30 focus:ring-1 focus:outline-none focus:ring-slate-800 rounded-lg text-xs px-4 py-1 text-center inline-flex items-center'
        type='button'
        onClick={featureComingSoon}
      >
        Asset class{' '}
        <svg
          className='w-2.5 h-2.5 ms-3'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>

      <button
        id='countryDropdown'
        data-dropdown-toggle='dropdown'
        className='text-slate-400 border border-slate-300 border-opacity-30 focus:ring-1 focus:outline-none focus:ring-slate-800 rounded-lg text-xs px-4 py-1 text-center inline-flex items-center'
        type='button'
        onClick={featureComingSoon}
      >
        Country{' '}
        <svg
          className='w-2.5 h-2.5 ms-3'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>

      <button
        id='sectorDropdown'
        data-dropdown-toggle='dropdown'
        className='text-slate-400 border border-slate-300 border-opacity-30 focus:ring-1 focus:outline-none focus:ring-slate-800 rounded-lg text-xs px-4 py-1 text-center inline-flex items-center'
        type='button'
        onClick={featureComingSoon}
      >
        Sector{' '}
        <svg
          className='w-2.5 h-2.5 ms-3'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>

      <div
        id='winnerFilter'
        className='m-2 p-2 h-6 flex items-center text-slate-400 bg-slate-600 text-xs rounded-lg'
        onClick={featureComingSoon}
      >
        <div id='activeButton' className='w-14 text-center cursor-pointer hover:text-slate-50'>
          Winners
        </div>
        <div id='allButton' className='w-14 text-center cursor-pointer hover:text-slate-50'>
          Losers
        </div>
      </div>

      <button
        id='startDate'
        data-dropdown-toggle='dropdown'
        className='text-slate-400 border border-slate-300 border-opacity-30 focus:ring-1 focus:outline-none focus:ring-slate-800 rounded-lg text-xs px-4 py-1 text-center inline-flex items-center'
        type='button'
        onClick={featureComingSoon}
      >
        Start Date{' '}
        <svg
          className='w-2.5 h-2.5 ms-3'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>

      <button
        id='endDate'
        data-dropdown-toggle='dropdown'
        className='text-slate-400 border border-slate-300 border-opacity-30 focus:ring-1 focus:outline-none focus:ring-slate-800 rounded-lg text-xs px-4 py-1 text-center inline-flex items-center'
        type='button'
        onClick={featureComingSoon}
      >
        End Date{' '}
        <svg
          className='w-2.5 h-2.5 ms-3'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>

      <div
        id='currencyFilter'
        className='m-2 p-2 h-6 flex items-center text-slate-400 bg-slate-600 text-xs rounded-lg'
        onClick={featureComingSoon}
      >
        <div id='activeButton' className='w-10 text-center cursor-pointer hover:text-slate-50'>
          USD
        </div>
        <div id='allButton' className='w-10 text-center cursor-pointer hover:text-slate-50'>
          SGD
        </div>
      </div>
    </div>
  )
}

export default Filters
