import { Formik, Field, Form } from "formik";
const AddTrades = () => {
    return(
        <div id='tradesForm' className="mt-auto flex flex-col py-2 text-neutral-400">
            <input id='tickerSearch' placeholder='Enter asset name/ticker' className="bg-slate-700 outline-none mx-2  text-sm p-1"/>
            <div id='stockData' className="flex flex-col my-2 bg-slate-700 p-2">
                <div id='firstRow' className="flex justify-between text-base font-semibold">
                    <div>1810.hk</div>
                    <div>HK$15.16</div>
                </div>
                <div id='secondRow' className="flex justify-between text-xs mb-1">
                    <div className="w-40">Xiaomi Corporation - Ordinary Shares - Class B</div>
                    <div>on Dec 5 2023</div>
                </div>
            </div>
            <Formik
                initialValues={{ date: "", type: true, qty: "", price: "", fee: "", ticker: "1810", name: "xiaomi"}}
                onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form className="m-2 flex flex-col gap-2">
                    <div id='row1Labels' className="flex text-xs font-bold">
                        <label htmlFor="tradeDate" className="w-44" >Trade Date</label>
                        <label htmlFor="tradeDate" className="" >Type</label>
                    </div>
                    <div id='row1Input' className="flex gap-4">
                        <Field name="tradeDate" type="date" className='mb-1 bg-transparent w-40 p-1 text-xs rounded-md border border-slate-700 outline-none focus:border-slate-600'/>    
                        <div id='typeButtons' className="flex items-center text-slate-400 text-xs gap-2 ">
                            <div id='activeButton' className="w-10 h-6 p-1 text-center cursor-pointer rounded-md bg-slate-700 hover:text-slate-50 target:text-red-500">
                                Buy
                            </div>
                            <div id='allButton' className="w-10 h-6 p-1 text-center cursor-pointer rounded-md bg-slate-700 hover:text-slate-50">
                                Sell
                            </div>
                        </div>
                    </div>

                    <div id='row2Labels' className="flex text-xs font-bold">
                        <label htmlFor="amt" className="w-44" >
                            Amount Bought
                        </label>
                    </div>
                    <div id='row2Input' className="mb-1">
                        <Field name="amt" type="text" className='w-full bg-transparent p-1 text-xs rounded-md border border-slate-700 outline-none focus:border-slate-600'/>    
                    </div>

                    <div id='row2Labels' className="flex text-xs font-bold justify-between">
                        <label htmlFor="amt" className="w-44" >
                            Unadjusted Buy Price in HKD
                        </label>
                        <label htmlFor="livePrice" className="text-xs font-light underline cursor-pointer" >HK$15.16</label>
                    </div>
                    <div id='row2Input' className="mb-1">
                        <Field name="amt" type="text" className='w-full bg-transparent p-1 text-xs rounded-md border border-slate-700 outline-none focus:border-slate-600'/>    
                    </div>

                    <div id='row3Labels' className="flex text-xs font-bold">
                        <label htmlFor="amt" className="w-44" >
                            Exchange/Transaction Fee
                        </label>
                    </div>
                    <div id='row3Input' className="mb-1">
                        <Field name="amt" type="text" className='w-full bg-transparent p-1 text-xs rounded-md border border-slate-700 outline-none focus:border-slate-600'/>    
                    </div>

                    <div id='row4Labels' className="flex text-xs font-bold">
                        <label htmlFor="amt" className="cursor-pointer" >
                            + Additional Options
                        </label>
                    </div>
                    
                    
                    <button type="submit" className="w-full h-9 text-sm font-semibold bg-slate-900 rounded-md hover:text-slate-300 active:bg-opacity-90">Add Transaction</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddTrades