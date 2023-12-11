import { useState, useEffect } from "react"
import { process } from "../utils/holdings"
import { useStore } from "../store"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getTrades } from "../lib/api"

const Table = () => {
    const { isLoading, isError, data, error } = useQuery({
      queryKey: ['trades'],
      queryFn: getTrades
    })
    if (isLoading) {
      return <span>Loading...</span>
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }
    return(
        <div id='table' className="h-full mt-2">
            <table className="min-w-full divide-y divide-slate-400 divide-opacity-30">
              <TableHead />
              <tbody className="">
                <TableRow data={data}/>
              </tbody>
            </table>
            </div>
    )
}

export default Table

const TableHead = () => {
  return(
    <thead className="">
      <tr>
        <th scope="col" className="tableHead text-left ">
          #
        </th>
        <th scope="col" className="tableHead text-left ">
          Ticker
        </th>
        <th scope="col" className="tableHead text-left ">
          Name
        </th>
        <th scope="col" className="tableHead text-left ">
          Qty
        </th>
        <th scope="col" className="tableHead text-right ">
          Avg Cost Basis
        </th>
        <th scope="col" className="tableHead text-right ">
          Mkt Price
        </th>
        <th scope="col" className="tableHead text-right ">
          Unrealized P/L
        </th>
        <th scope="col" className="tableHead text-right ">
          Purchase Value
        </th>
        <th scope="col" className="tableHead text-right ">
          Current Value
        </th>
        <th scope="col" className="tableHead text-right ">
          First Held
        </th>
        <th scope="col" className="tableHead text-right ">
          Returns
        </th>
      </tr>
    </thead>
  )
}

const TableRow = ( {data}: {data: any} ) => {
  const processedData = process(data)
  const {
    name,
    ticker,
    openShares,
    avgCostBasis,
    mktPrice,
    unrealizedReturns,
    purchaseValue,
    currentValue,
    firstHeld,
    returns_percent,
    returns_net,
  } = processedData
  
  const firstHeldTime = new Date(firstHeld)
  const firstHeldDatetime = firstHeldTime.getTime()
  const now = Date.now()
  const diffTime = Math.abs(now - firstHeldDatetime)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  const diffYears = Math.floor(diffDays/365)
  const remainingMonths = Math.floor((diffDays%365)/30)
  return(
      <tr className="text-slate-400">
          <td className="px-4 py-4 text-sm font-medium text-slate-400 whitespace-nowrap">
          1
          </td>
          <td className="px-4 py-4 text-sm whitespace-nowrap">
            {ticker}
          </td>
          <td className="px-4 py-4 text-sm whitespace-nowrap">
            {name}
          </td>
          <td className="px-4 py-4 text-sm whitespace-nowrap">
          {openShares}
          </td>
          <td className="tableRow">
              HK${avgCostBasis/100}
          </td>
          <td className="tableRow">
              HK${mktPrice}
          </td>
          <td className="tableRow">
              {unrealizedReturns*100}%
          </td>
          <td className="tableRow">
              HK${purchaseValue/100}
          </td>
          <td className="tableRow">
              HK${currentValue/100}
          </td>
          <td className="tableRow">
              {`${diffYears} yrs ${remainingMonths} mo`}
          </td>
          <td className="tableRow">
              {returns_percent*100}%
          </td>
      </tr>
  )
}