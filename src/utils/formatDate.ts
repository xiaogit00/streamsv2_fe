export const formatDate = (date: Date) => {
    const newDate = new Date(date)
    const dd = String(newDate.getDate()).padStart(2, '0');
    const mm = String(newDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yy = String(newDate.getFullYear()).slice(-2);

    const formattedDate = dd + '/' + mm + '/' + yy;

    return formattedDate
}

export const getRemainingMonths = (date: Date) => {
    const firstHeldTime = date
    const firstHeldDatetime = firstHeldTime.getTime()
    const now = Date.now()
    const diffTime = Math.abs(now - firstHeldDatetime)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const diffYears = Math.floor(diffDays / 365)
    const remainingMonths = Math.floor((diffDays % 365) / 30)
    return `${diffYears} yrs ${remainingMonths} mo`
}