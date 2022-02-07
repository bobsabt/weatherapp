import React from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import CreateCard from './Components/CreateCard';
import { getDayName, } from './Components/utils';
import './index.css';

function App() {
  // The display of the cities
  const [cards, setCards] = React.useState([]);
  // The state of adding a new card/city is active or not
  const [isAddCardActive, setIsAddCardActive] = React.useState(true);
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

  // Add card/city 
  const addCard = () => {
    setIsAddCardActive(false);
    setCards([...cards, {id: Math.floor(Math.random()*10000)+1, location:"", icon:"", temp:"", text:"", feels:"", nextdays:"", isSearchShown:true}]);
  };

  // Delete card
  const deleteCard = (id) => {
    setCards(cards.filter((card) => id !== card.id))
  }; 

  // Delete new card and set add card is true 
  const deleteNewCard = (id) => {
    setCards(cards.filter((card) => id !== card.id))
    setIsAddCardActive(true)
  }; 

  return (
    <div className="App">       
    <Navbar />
    <div className='cards-container'>      
      {cards.map( (card, index) => 
      <div className={!card.isSearchShown? "card-container": "card-container add-card-container"}  key={index}>
        {!card.isSearchShown ?
          <Card 
            cardId={card.id} 
            location={card.location.name} 
            country={card.location.country} 
            icon={card.current.condition.icon} 
            temp={card.current.temp_c} 
            text={card.current.condition.text} 
            feels={card.current.feelslike_c} 
            nextdays={card.myNextArr} 
            isSearchShown={card.isSearchShown} 
            handleDelete={deleteCard}
          />
        :
          <Card
            apikey={API_KEY}
            cardId={card.id} 
            isSearchShown={card.isSearchShown} 
            cards={cards} 
            setCards={setCards} 
            setIsAddCardActive={setIsAddCardActive}
            handleDelete={deleteNewCard} 
          />
        }
      </div>
      )}
      {isAddCardActive && <CreateCard addCard={addCard} />}
    </div>
  </div>
  );
}

export default App;
