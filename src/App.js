import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import '../src/coin.css';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )

      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, [setCoins]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtercoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text"> Search a Currency</h1>
          <form>
            <input
              type="text"
              placeholder="Seach"
              className="coin-input"
              onChange={handleChange}
            />
          </form>
        </div>
        {filtercoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              Symbol={coin.Symbol}
              market_cap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
             />
          );
        })}
      </div>
    </>
  );
}

export default App;
