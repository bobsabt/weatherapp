//Get the name of the day from its index in the week
export const getDayName = (day) => {
        
    let tempDay = new Date(day);
    let dayNumber = tempDay.getDay();
    
    if(dayNumber === 0) return "Sun";
    else if(dayNumber === 1) return "Mon";
    else if(dayNumber === 2) return "Tue";
    else if(dayNumber === 3) return "Wen";
    else if(dayNumber === 4) return "Thu";
    else if(dayNumber === 5) return "Fri";
    else return "SAT";
};
