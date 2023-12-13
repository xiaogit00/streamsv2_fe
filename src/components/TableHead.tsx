const TableHead = () => {
    return (
      <thead className=''>
        <tr>
          <th scope='col' className='tableHead text-left '>
            #
          </th>
          <th scope='col' className='tableHead text-left '>
            Ticker
          </th>
          <th scope='col' className='tableHead text-left '>
            Name
          </th>
          <th scope='col' className='tableHead text-left '>
            Qty
          </th>
          <th scope='col' className='tableHead text-right '>
            Avg Cost Basis
          </th>
          <th scope='col' className='tableHead text-right '>
            Mkt Price
          </th>
          <th scope='col' className='tableHead text-right '>
            Unrealized P/L
          </th>
          <th scope='col' className='tableHead text-right '>
            Purchase Value
          </th>
          <th scope='col' className='tableHead text-right '>
            Current Value
          </th>
          <th scope='col' className='tableHead text-right '>
            First Held
          </th>
          <th scope='col' className='tableHead text-right '>
            Returns
          </th>
        </tr>
      </thead>
    )
  }

export default TableHead