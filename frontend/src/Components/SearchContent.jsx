import React from 'react';
import axios from 'axios';
import { getDayName } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchContent = ({apikey, cardId, cards, setCards, setIsAddCardActive}) => {
    const [error, setError] = React.useState("");
    const [city, setCity] = React.useState("");
    const [isShowError, setIsShowError] = React.useState(false);

    const getWeatherData = async() => {
        
        if(city.length === 0) {
            setIsShowError(true);
            setError("Missing city name");
        }else{
            try{
                const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=3`);
                const parsedData = response.data;

                let myNextArr = [];
                for(let i = 1; i < 3; i++){
                    let temp = parsedData.forecast.forecastday[i].date;
                    myNextArr.push({...parsedData.forecast.forecastday[i], nextDay: getDayName(temp)});                    
                }
                updateCard(cardId, parsedData, myNextArr);   
            }    
            catch(err){
                setIsShowError(true);
                setError("Not a valid city name");
            }
        }      
    };

    // Update card
    const updateCard = (cardId, parsedData, myNextArr) => {
        setCards(cards.map((card) => (card.id === cardId) ? {id: cardId, ...parsedData, myNextArr, isSchonSearch: false} : card));
        setIsAddCardActive(true);
    };

    // Handle when the enter key is pressed
    const handlePressEnter = (e) => {
        if(e.key === "Enter"){
            getWeatherData();
        }  
    };

    return (
        <div className='search-container'>
            <div className='search-box'>
                <input className="search-input" type="text" placeholder='Search...'  
                    value={city} 
                    onChange={(e)=>{setCity(e.target.value); setError("")}} 
                    onKeyUp={handlePressEnter}                  
                />
                <button className="search-btn" onClick={()=>{getWeatherData()}}><FontAwesomeIcon  icon={faSearch}/> </button> 
            </div> 
            <div className='error-container'>
                {isShowError && error}               
            </div> 
        </div>

    )
};

export default SearchContent;