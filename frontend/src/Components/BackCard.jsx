import React from 'react';

const BackCard = ({nextday, nexticon, nextavgtemp, nextmintemp, nextmaxtemp}) => {
  return(
      <div className='single-back'>
        <p className='nextday'>{nextday}</p>
        <img src={nexticon} alt="icon"/>
        <div className='nexttemp-container'>
          <p className='min'><i className="fas fa-caret-down"></i> {nextmintemp} <sup>o</sup>C</p>
          <p className='avgtemp'>{nextavgtemp} <sup>o</sup>C</p>          
          <p className='max'><i className="fas fa-caret-up"></i> {nextmaxtemp} <sup>o</sup>C</p>    
        </div>
      </div>
  );
};

export default BackCard;