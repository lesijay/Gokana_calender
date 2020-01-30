import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' 

import './main.scss'

export default class CalendarApp extends React.Component {

  constructor(){
    super()
    this.state = {
      calendarEvents: [
        {title: localday(),start: Date.now(), allDay: new Date().allDay}
      ]
    }
  }


  handleDateClick = (arg) => {
    // let k = new Date('01/31/2020')
    // let kk = new Date('02/1/2020')
    // let jp = kk-k
    // console.log(jp/86400000)

    const ogoni_days = ["Cho","Kor","Ma","Bom","Zua",]
    let dt2 = arg.date
    let dt1 = new Date('01/25/2020')
    let diffDays = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    let x = diffDays%5

    if(x < 0){
        x = 5 + x
    }
      
    const locatDay = ogoni_days[x]
  
    this.setState({
            calendarEvents: this.state.calendarEvents.concat(
              {
                title: locatDay, start: dt2,allDay: dt2.allDay
              }
            )
        }
    )
  }
  
  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-calendar'>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prevYear,nextYear',
              center: 'title',
            }}
            
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
            weekends={ this.state.calendarWeekends }
            events={ this.state.calendarEvents }
            
            dateClick={ this.handleDateClick }
            
            />
        </div>
      </div>
    )
  } 
}

function localday(){
  const ogoni_days = ["Cho", "Kor", "Ma", "Bom", "Zua"];
  let dt1 = new Date('01/25/2020')
  let dt2 = new Date()
  let diffDays = Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
  );
  let x = diffDays % 5;

  if (x < 0) {
    x = 5 + x;
  }
  return ogoni_days[x];
}
