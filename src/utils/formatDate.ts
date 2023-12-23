export const formatDate = (date: Date) => {
    const newDate = new Date(date)
    const dd = String(newDate.getDate()).padStart(2, '0');
    const mm = String(newDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yy = String(newDate.getFullYear()).slice(-2);

    const formattedDate = dd + '/' + mm + '/' + yy;

    return formattedDate
}

