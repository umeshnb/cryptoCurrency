import React from "react";
import '../src/coin.css';

const Coin = ({ name, image, Symbol, price, volume, priceChange,market_cap }) => {
  return (
    <div>
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="crytpo" />
            <h1>{name}</h1>
            <p className="coin-symbol">{Symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price"> Price: ${price} </p>
            <p className="coin-volume"> Volume: ${volume.toLocaleString()}</p>
             {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
            <p className='coin-marketcap'> Mkt cap: ${market_cap.toLocaleString()} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
