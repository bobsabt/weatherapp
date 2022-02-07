import React from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import { getDayName, } from './Components/utils';
import './index.css';

function App() {
  // The display of the cities
  const [cards, setCards] = React.useState([]);
  
  // Get the api key
  const API_KEY = process.env.REACT_APP_API_KEY;
  

  // By default it starts with Budapest weather 
  React.useEffect(() =>
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Budapest&days=3`)
    .then((response) => response.json())
    .then((d) => {
      // Add name of the next days with using getDayName()
      let myNextArr = [];
      for(let i = 1; i < 3; i++){
          let temp = d.forecast.forecastday[i].date;
          myNextArr.push({...d.forecast.forecastday[i], nextDay: getDayName(temp)});                    
      }
      setCards([{id: Math.floor(Math.random()*10000)+1, ...d, myNextArr, isSearchShown: false}]); 
    })
    .catch((err) => {
      console.log("Error:" + err)
    }),
    []
  );

  return (
    <div className="App">
      <Navbar />
      <div className='cards-container'>      
          {cards.map( (card, index) => 
          <div className="card-container" key={index}>
              <Card 
                location={card.location.name} 
                country={card.location.country} 
                icon={card.current.condition.icon} 
                temp={card.current.temp_c} 
                text={card.current.condition.text} 
                feels={card.current.feelslike_c}
              />
          </div>
          )}
      </div>
    </div>
  );
}

export default App;
