import { useEffect } from "react";
import { useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const [budget, setBudget] = useState(0);
  const [amount, setAmount] = useState(0);
  const [bcOptions, setBcOptions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onChange = (event) => setBudget(event.target.value);

  useEffect(() => {
    if (budget !== "" && bcOptions.length > 0) {
      setAmount(
        Math.floor(budget / bcOptions[selectedIndex].getAttribute("price"))
      );
    }
  }, [budget, bcOptions, selectedIndex]);

  const onSelect = (event) => {
    setBcOptions(event.target.options);
    setSelectedIndex(event.target.selectedIndex);
  };
  return (
    <div>
      <h1>The coins! {coins.length}개</h1>
      {loading ? <strong>Loading...</strong> : null}
      <div>
        <span>보유 예산(USD):</span>
        <input
          type="text"
          placeholder="Write your budget"
          onChange={onChange}
          value={budget}
        ></input>
      </div>
      가상화폐 선택 :
      <select onChange={onSelect}>
        {coins.map((coin, index) => (
          <option key={index} price={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol} : ${coin.quotes.USD.price} USD)
          </option>
        ))}
      </select>
      <h3>구매 가능 갯수 : {amount}개</h3>
    </div>
  );
}

export default CoinTracker;
