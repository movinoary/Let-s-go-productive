const days = [
    'minggu',
    'senin',
    'selasa',
    'rabu',
    'kamis',
    'jumat',
    'sabtu',
  ]

function getTime(){
    let dateTime = new Date();
    
    let years = dateTime.getFullYear();
    let dates = dateTime.getDate();
    let months = dateTime.getMonth();
    let days = dateTime.getDay();

    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();

    switch (months) {
        case 0: 
            months = 'January';
            break;
        case 1: 
            months = 'February';
            break;
        case 2: 
            days = 'March';
            break;
        case 3: 
            months = 'April';
            break;
        case 4: 
            months = 'May';
            break;
        case 5: 
            months = 'June';
            break;
        case 6: 
            months = 'July';
            break;
        case 7: 
            months = 'August';
            break;
        case 8: 
            months = 'September';
            break;
        case 9: 
            months = 'October';
            break;
        case 10: 
            months = 'November';
            break;
        case 11: 
            months = 'December';
            break;
    };

    switch (days) {
        case 0: 
            days = 'Sunday';
            break;
        case 1: 
            days = 'Monday';
            break;
        case 2: 
            days = 'Tuesday';
            break;
        case 3: 
            days = 'Wesnesday';
            break;
        case 4: 
            days = 'Thuesday';
            break;
        case 5: 
            days = 'Friday';
            break;
        case 6: 
            days = 'Saturday';
            break;
    };

    if(dates < 10){
        dates = '0' + dates 
    }

    if(hour < 10){
        hour = '0' + hour 
    }

    if(minute < 10){
        minute ='0' + minute 
    }

    if(second < 10){
        second = '0' + second 
    }
    
    console.log(`${hour} ${minute} ${second}`)

    document.getElementById('years').innerHTML = years
    document.getElementById('months').innerHTML = months
    document.getElementById('dates').innerHTML = dates
    document.getElementById('days').innerHTML = days

    document.getElementById('hours').innerHTML = hour
    document.getElementById('minutes').innerHTML = minute
    document.getElementById('seconds').innerHTML = second
}

setInterval(getTime, 10);
