
document.querySelector('.calculate').onclick = calculator;

function calculator() {
    let entry = document.querySelector('.entry').valueAsDate;
    let from = document.querySelector('.from').valueAsDate;
    let to = document.querySelector('.to').valueAsDate;
    let dada = new Date();
    let rezult = new Date();
    
        const date1 =from;
        const date2 =to;
        const today = new Date();
        // One day in milliseconds
        const oneDay = 1000 * 60 * 60 * 24;
    
        // Calculating the time difference between two dates
        const diffInTime = date2.getTime() - date1.getTime();
    
        // Calculating the no. of days between two dates
        const diffInDays = Math.round(diffInTime / oneDay);

        dada.setDate(entry.getDate() + 90);

        rezult.setDate((entry.getDate() + 90) - diffInDays);

    console.log(diffInDays," and ", rezult);
        var yy = rezult.getFullYear();
        var mm = rezult.getMonth() + 1;
        var dd = rezult.getDate();

        var date = dd + "." + mm + "." + yy;
   document.querySelector('.deadline').textContent="Дата окончания вышего пребывания: " + date;

        // Calculating the time difference between two dates
        const days = rezult.getTime() - today.getTime();
    
        // Calculating the no. of days between two dates
        const convert = Math.round(days / oneDay);

   document.querySelector('.days').textContent="Количество дней до конца срока пребывания: " + convert;

}



