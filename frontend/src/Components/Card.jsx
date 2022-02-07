import React from 'react';
import ReactCardFlip from 'react-card-flip';
import FrontCard from './FrontCard';

const Card = ({location, country, icon, temp, text, feels}) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleClick = (e)=> {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    };
    return (
        <>
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
                            </div>
            </ReactCardFlip >
            <button className='btn-toggle'onClick={handleClick}>{!isFlipped ? "Show more" : "Show Today"}</button>
        </>
  );
};

export default Card;
