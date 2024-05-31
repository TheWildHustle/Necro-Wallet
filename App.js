import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

function App() {

  const [price, setPrice] = useState(0);
    const getPrice = () => {
      axios 
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((res) => {
        setPrice(res.data.bpi.USD.rate_float);
      })
      .catch((err) => {
        console.log(err);
      });
  }; 

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <div className="App">
      <h1>Necro Wallet</h1>
      <h3>${price}</h3>
    </div>
  );
}

export default App;
