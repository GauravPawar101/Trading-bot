import '../ccss/Exchange.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../ccss/Exchange.css';
import {Outlet} from 'react-router-dom';

export default function Exchange(props) {
  const [selectedCoin, setSelectedCoin] = useState(' .. ');
  const [walletValue, setWalletValue] = useState(100);
  const [btcValue, setBtcValue] = useState(10);
  const [inputValue, setInputValue] = useState('');
  const [displayedValue, setDisplayedValue] = useState('');

  let wallet = {
    "usdt": 100,
    "btc": 10,
    "eth": 10,
    "sol": 10
  };
  
  const handleInputChange = (event) => {
    // Update the state with the current input value
    setInputValue(event.target.value);if(wallet.usdt>=100 && event.target.value){
    setWalletValue(parseFloat(event.target.value) + parseFloat(wallet.usdt));
    
    }};


const handleButtonClick = () => {
  // Add the input value to a variable and update the displayed value
  const newValue = `Recharged: ${inputValue}USD`;
  console.log(`Wallet before: ${wallet.usdt}`);
  wallet.usdt += parseFloat(inputValue);
  console.log(`Wallet after: ${wallet.usdt}`); 
  setDisplayedValue(newValue);
  setTimeout(async()=>{setInputValue('');},10);
  setTimeout(async()=>{setDisplayedValue('');},5000);

};


function Decide(rsi) {
  if (wallet.usdt < 30){
      return "20s";
  } else if (rsi <= 20) {
      return "100b";
  } else if (rsi > 20 && rsi <= 30) {
      return "80b";
  } else if (rsi > 30 && rsi <= 35) {
      return "60b";
  } else if (rsi > 35 && rsi < 40) {
      return "40b";
  } else if (rsi >= 40 && rsi <= 45) {
      return "20b";
  } else if (rsi >= 60 && rsi <= 70){
      return "10s";
  } else if (rsi >= 55 && rsi < 60){
      return "30s";
  } else if (rsi >= 70 ){
      return "50s";
  }
  // Add more conditions if needed

  // Default case
  return "0b";
}


async function call(indicator) {
  const api_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjVjYzg4YTgxNDBjZmQ3MjNkYTk4Y2QzIiwiaWF0IjoxNzA3OTAzMTg2LCJleHAiOjMzMjEyMzY3MTg2fQ.w-0UXSruXEWZxJgE51tTdo0VHsFllv-kmPEcodSWaRM'; // Replace with your actual API key
  const url = `https://api.taapi.io/${indicator}?secret=${api_key}&exchange=binance&symbol=BTC/USDT&interval=1m`;

  try {
      const response = await fetch(url);
      const data = await response.json();
      return data.value;
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}
setInterval(async()=>{setBtcValue(wallet.btc)},30000)
// ... (unchanged code above)
let dotwale = ()=>{for(let i = 1;;i++){return i;}}

(async () => {
  try {
      setInterval(async () => {
          try {
              const rsiValue = await call('rsi');
              if (rsiValue === undefined){
                  console.log("Calling again.`" + String(setInterval(dotwale,500)));}
              else {
                  if (wallet.btc<2){wallet.btc += 5}
              let result = Decide(rsiValue);
              let lastChar = result.charAt(result.length - 1);
              let percentage = parseFloat(result.substring(0, result.length - 1));

              if (lastChar === "b") {
                  if (percentage === 0) {
                      console.log(`Current RSI value = ${rsiValue}. No trade order`);
                  } else {
                      console.log(`Current RSI value = ${rsiValue}. Executing a buy`);
                   
                     if (wallet.usdt !== 0) {
                          console.log(`Current RSI = ${rsiValue}. Surely executing a buy`);
                          
                          // Use setTimeout to delay the execution
                          setTimeout(async () => {
                            let priceValue = await call('price');
                              if(parseFloat(priceValue) > 0){
                              wallet.btc += parseFloat((wallet.usdt * (percentage / 100)) / priceValue);
                              wallet.usdt -= parseFloat(wallet.usdt * (percentage / 100)); // Deduct the usdt after buy
                              console.log(`USDT left after buying = ${wallet.usdt}`);
                              console.log(`Current value of Bitcoin after buying = ${wallet.btc}`);
                              }
                              else{
                                  console.log("NaN for buy");
                              }
                          }, 20000);
                      }
                      // Handle the case when wallet.usdt is 0 if needed
                  }
              }  else if(lastChar === 's'){
                let priceValue = await call('price');
                  console.log(`Current RSI = ${rsiValue}. Surely executing a sell`);
                  setTimeout(async () => {
                      

                      if(parseFloat(priceValue) > 0){wallet.btc -= parseFloat(wallet.btc * (percentage / 100));
                      wallet.usdt += parseFloat(priceValue * (percentage / 100)); // Deduct the usdt after buy
                      console.log(`Current USDT in wallet = ${wallet.usdt}`);
                      console.log(`Current Bitcoin in wallet = ${wallet.btc}`);}
                  
                  else{
                      console.log("NaN for sell");
                  }}, 20000);
              }else {
                  if (wallet.btc !== 0) {
                      console.log(`Current RSI value = ${rsiValue}`);
                      
                      // Use setTimeout to delay the execution
                      setTimeout(async () => {
                          let priceValue = await call('price');
                          wallet.btc -= parseFloat(wallet.btc * (percentage / 100));
                          wallet.usdt += parseFloat(wallet.btc * priceValue); // Update usdt after sell
                          console.log(`Current value of usdt = ${wallet.usdt}`);
                          console.log(`Current value of Bitcoin = ${wallet.btc}, ${priceValue}`);
                      }, 20000);
                  } else {
                      console.log("Insufficient Balance in Bitcoin wallet.");
                  }
              }
          }
          
      }catch(error){
          console.log("error",error);
      }}, 60000);
  } catch (error) {
      console.error("Error:", error);
  }
})();



  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
    
  };

  return (
    <div id='maintemp' className="row row-cols-2 row-cols-md-3 g-4.2">
      <div className="col g-100 h-1">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">The Exchange</h5>
            <p className="card-text">"Trade seamlessly with our intuitive exchange."</p>
            <select className="form-select" aria-label="Select Stock" value={selectedCoin} onChange={handleCoinChange}>
              <option value="Stocks" disabled>| Select |</option>
              <option value="Ethereum">ETH</option>
              <option value="BTC">BTC</option>
              <option value="DOGE">DOGE</option>
            </select>

            <div className="input-group mb-3">
              <span className="input-group-text ">{selectedCoin}</span>
            </div>

            <div className="input-group">
              
              <span className="input-group-text">{btcValue} BTC</span>
              <span className="input-group-text">$ {walletValue}</span>
              <input
                type="text"
                className="form-control"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter amount"
                aria-label="Dollar amount (with dot and two decimal places)"
              />
            </div>
          </div>
          <button className="btn btn-primary" type="submit" onClick={handleButtonClick} >Recharge</button>
          <p>{displayedValue}</p>
          <div className="card-footer">
            <small className="text-muted">Last updated 30s ago</small>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
    
  );
}
