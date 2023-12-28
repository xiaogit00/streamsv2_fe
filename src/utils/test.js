const trades = [
    {
        id: '707c212b-001a-474c-b032-33775fb60c69',
        ticker: 'PYPL',
        name: 'Paypal',
        qty: 200,
        price: 40,
        type: true,
        currency: 'USD',
        exchange: 'NASDAQ',
        cost: 8000,
        exchange_fees: 10,
        date: '2023-01-05',
        close_id: null
    },
    {
        id: '4362006a-bf4a-47e6-b224-eb052785bd02',
        ticker: 'PYPL',
        name: 'Paypal',
        qty: 50,
        price: 70,
        type: false,
        currency: 'USD',
        exchange: 'NASDAQ',
        cost: 3500,
        exchange_fees: 10,
        date: '2023-01-05',
        close_id: '707c212b-001a-474c-b032-33775fb60c69'
    },
    {
        id: '77995656-0d0d-4a4e-bf75-76e96028a6b7',
        ticker: 'PYPL',
        name: 'Paypal',
        qty: 10,
        price: 80,
        type: false,
        currency: 'USD',
        exchange: 'NASDAQ',
        cost: 800,
        exchange_fees: 10,
        date: '2023-01-05',
        close_id: '707c212b-001a-474c-b032-33775fb60c69'
    },
    {
        id: 'd79d2947-2ceb-4a0a-8bf9-5482d22b4811',
        ticker: 'PYPL',
        name: 'Paypal',
        qty: 10,
        price: 90,
        type: false,
        currency: 'USD',
        exchange: 'NASDAQ',
        cost: 900,
        exchange_fees: 10,
        date: '2021-01-05',
        close_id: '707c212b-001a-474c-b032-33775fb60c69'
    },
    {
        id: '615e2c2b-8fb7-49b8-a873-c7fe180b315a',
        ticker: 'PYPL',
        name: 'Paypal',
        qty: 10,
        price: 90,
        type: false,
        currency: 'USD',
        exchange: 'NASDAQ',
        cost: 900,
        exchange_fees: 10,
        date: '2023-01-01',
        close_id: '707c212b-001a-474c-b032-33775fb60c69'
    }
]

const firstHeld = trades.reduce((acc, curr) => {
    if (new Date(curr.date).valueOf() < acc) return new Date(curr.date).valueOf()
    else return acc
}, new Date(trades[0].date).valueOf())
console.log("This is run")
console.log(new Date(firstHeld))