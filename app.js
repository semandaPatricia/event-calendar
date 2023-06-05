const calendar= document.getElementById('calendar');

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const today =new Date();
  let currentMonth =today.getMonth();
  let currentYear =today.getFullYear();



const drawNewCalender =() =>{
    for(let i=0; i< 35; i++){
        
        const day =document.createElement('div');
        day.classList.add('day')

        const dayText =document.createElement('p')
        dayText.classList.add('day-text');

        const dayNumber =document.createElement('p')
        dayNumber.classList.add('day-number');

        const eventName =document.createElement('small')
        eventName.classList.add('event-name');

        day.appendChild(dayText);
        day.appendChild(dayNumber);
        day.appendChild(eventName);
        console.log(day);
        calendar.appendChild(day);
 };

  const updatingCalendar =(month,year,events) =>{
    const dayElements =document.querySelector('.day');

    const firstDayOfMonth =new Date();
    firstDayOfMonth.setMonth(month)
    firstDayOfMonth.setFullYear(year);

    const firstDayOfWeek = firstDayOfMonth.getDate();
    const monthName =months[month];
    const monthWithYear = `${year}-${month}`;
    const dayInMonth = new Date(year,month + 1 ,0).getDate();
    let dayCounter=1;

    for (let i =0; i<dayElements.length; i++){
        const day =dayElements[i];

        const dayNumber=day.querySelector('.day-number');
        if(i > firstDayOfWeek && dayCounter < dayInMonth) {
            dayNumber.innerText=dayCounter;
            dayCounter++ ;
        }else{
            dayNumber.innerText=''
        }

       // const dayText=day.querySelector('.day-text');
        //dayText.innerText=days[i % 7];
    }

}


}
drawNewCalender();
updatingCalendar(currentMonth,currentYear);