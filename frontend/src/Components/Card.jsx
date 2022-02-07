import React from 'react';
import ReactCardFlip from 'react-card-flip';
import FrontCard from './FrontCard';
import BackCard from './BackCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Card = ({location, country, icon, temp, text, feels, nextdays, handleDelete, cardId}) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleClick = (e)=> {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    };
    return (
        <>
        <FontAwesomeIcon className="delete" icon={faTimesCircle} onClick={()=>handleDelete(cardId)}/>
            <p className='city'>{location}</p>
            <p className='country'>{country}</p>
            <ReactCardFlip isFlipped ={isFlipped} flipDirection="vertical">
                            <FrontCard 
                                icon={icon} 
                                temp={temp} 
                                text={text} 
                                feels={feels} 
                            />
                            <div className='backcard-container'>
                                {nextdays.map((nextday, index) => 
                                    <BackCard key={index} 
                                        nextday={nextday.nextDay}  
                                        nexticon={nextday.day.condition.icon} 
                                        nextavgtemp={nextday.day.avgtemp_c} 
                                        nextmaxtemp={nextday.day.maxtemp_c} 
                                        nextmintemp={nextday.day.mintemp_c} 
                                        nexttext={nextday.day.condition.text}
                                    />
                                )}   
                            </div>
            </ReactCardFlip >
            <button className='btn-toggle'onClick={handleClick}>{!isFlipped ? "Show more" : "Show Today"}</button>
        </>
  );
};

export default Card;
