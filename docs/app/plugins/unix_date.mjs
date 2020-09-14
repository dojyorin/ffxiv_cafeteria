export function unixDate(time){
    function pad(number){
        return String(number).padStart(2, "0");
    }

    const date = new Date(time * 1000);
    return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())}`;
}

export default unixDate;