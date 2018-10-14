function GetDate(){
    let date = new Date();

    let dateFormated = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:`;
    
    return dateFormated += 
        (date.getMinutes() < 10) ? 
            `0${date.getMinutes()}` : `${date.getMinutes()}`
}