import React from 'react'
import CalendarApp from './components/CalendarApp'



class App extends React.Component{
  render(){
    return(
      <div className="container">
        <p className="info">Note: click date to show the local day in Gokana</p>
        <CalendarApp/>
      </div>
    )
  }
}

export default App
