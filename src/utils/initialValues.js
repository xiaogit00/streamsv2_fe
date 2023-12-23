function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date = new Date()) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

export const initialTradeFormValues = {
    date: formatDate(),
    type: true,
    qty: '',
    price: '',
    exchange_fees: '',
    currency: '',
    exchange: '',
    cost: 0,
    ticker: '',
    name: '',
}

export const dummySearchReponse = [
    {
        "symbol": "MSFT",
        "name": "Microsoft Corporation",
        "currency": "USD",
        "stockExchange": "NASDAQ Global Select",
        "exchangeShortName": "NASDAQ"
    },
    {
        "symbol": "MSFT.L",
        "name": "LEVERAGE SHARES PUBLIC LIMITED ",
        "currency": "GBp",
        "stockExchange": "London Stock Exchange",
        "exchangeShortName": "LSE"
    },
    {
        "symbol": "MSFT.NE",
        "name": "Microsoft Corporation",
        "currency": "CAD",
        "stockExchange": "NEO",
        "exchangeShortName": "NEO"
    },
    {
        "symbol": "MSFO",
        "name": "YieldMax MSFT Option Income Strategy ETF",
        "currency": "USD",
        "stockExchange": "New York Stock Exchange Arca",
        "exchangeShortName": "AMEX"
    },
    {
        "symbol": "MSFD",
        "name": "Direxion Daily MSFT Bear 1X Shares",
        "currency": "USD",
        "stockExchange": "NASDAQ Global Market",
        "exchangeShortName": "NASDAQ"
    },
    {
        "symbol": "MSFU",
        "name": "Direxion Daily MSFT Bull 1.5X Shares",
        "currency": "USD",
        "stockExchange": "NASDAQ Global Market",
        "exchangeShortName": "NASDAQ"
    }
]