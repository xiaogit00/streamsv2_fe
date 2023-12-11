const Header = () => {
    return(
        <div id='header' className="h-12 border-b border-y-slate-600 flex items-center">
            <div id='pageTitle' className="m-2 p-2">
                <h4 className="text-slate-200 font-semibold text-sm">Holdings</h4>
            </div>
            <div id='buttonContainer' className="m-2 p-2 h-6 flex items-center text-slate-400 bg-slate-600 text-xs rounded-lg">
                <div id='activeButton' className="w-16 text-center cursor-pointer hover:text-slate-50">Active</div>
                <div id='allButton' className="w-16 text-center cursor-pointer hover:text-slate-50">All</div>
            </div>
        </div>
    )
}

export default Header 