import React from 'react';
import Navbar from './Components/Navbar';
import './index.css';

function App() {
  
  // Get the api key
  const API_KEY = process.env.REACT_APP_API_KEY;
  

  // By default it starts with Budapest weather 
  React.useEffect(() =>
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Budapest&days=3`)
    .then((response) => response.json())
    .then((d) => {
      console.log(d)
    })
    .catch((err) => {
      console.log("Error:" + err)
    }),
    []
  );

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
