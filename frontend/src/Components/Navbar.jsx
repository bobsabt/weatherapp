import React from 'react';

const Title = () => { 

    let date = new Date().toString();
    date = date.substring(0,16)
    
    return (
        <div className='title-container'>
            <div>
                <div className="main-title">
                    <h1>Weather</h1>
                </div>
                <div className='sub-title'>
                    <p>Forecast</p>
                </div>
            </div>               
            <h2>Today <span>{date}</span></h2>                 
        </div>
    )
}

export default Title;