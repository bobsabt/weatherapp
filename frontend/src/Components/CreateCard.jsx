import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const CreateCard = ({addCard}) => {
  return (
    <div className="card-container add-card-container">
        <h1 className="addcity">Add city</h1>    
        <FontAwesomeIcon className="plus" icon={faPlusCircle} onClick={addCard}/>      
    </div>
  );
};

export default CreateCard;