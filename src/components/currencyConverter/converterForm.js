import React, { useState } from "react";
import CurrencySelect from "./currencySelect";
import { VITE_API_KEY } from "./config";
import exchangeRates from "./exchangeRate.json";

function ConverterForm() {
  const [amount, setAmount] = useState();
  const [formCurrency, setFormCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState("");



  const handleSwapCurrency = () => {
    setFormCurrency(toCurrency);
    setToCurrency(formCurrency);
  };



  const getExchangeRate = async () => {
    // const API_key=import.meta.env.VITE_API_KEY
    // const API_url = `https://v6.exchangerate-api.com/v6/${VITE_API_KEY}/pair/${formCurrency}/${toCurrency}`;

    // try {
    //   const rensponse = await fetch(API_url);
    //   if (!rensponse.ok) throw Error("something went wrong");

    //   const data = await rensponse.json();
    //   const rate = (data.conversion_rate * amount).toFixed(2);
    //   console.log(rate);
    //   setResult(`${amount} ${formCurrency} = ${rate} ${toCurrency}`);
    // } catch (err) {
    //   console.log(err);
    // }

    const rate = exchangeRates[formCurrency]?.[toCurrency];
    if (rate) {
      const convertedAmount = (rate * amount).toFixed(2);
      setResult(`${amount} ${formCurrency} = ${convertedAmount} ${toCurrency}`);
    } else {
      setResult("Exchange rate not available for the selected currencies.");
    }
  };



  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };


  return (
    <>
      <form className="converter-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label className="from-lebel">enter amount</label>
          <input
            type="number"
            className="form-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group form-currency-group">
          <div className="form-section">
            <label className="from-lebel">form</label>

            <CurrencySelect
              selectedCurrency={formCurrency}
              handleCurrency={(e) => setFormCurrency(e.target.value)}
            />
          </div>

          <div className="swap-icon" onClick={handleSwapCurrency}>
            <svg
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 19"
            >
              <path
                d="M32 96l320 0 0-64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-64L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-320 0 0 64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64 320 0z"
                fill="#fff"
              />
            </svg>
          </div>

          <div className="form-section">
            <label className="from-lebel">to</label>

            <CurrencySelect
              selectedCurrency={toCurrency}
              handleCurrency={(e) => setToCurrency(e.target.value)}
            />
          </div>
        </div>

        <button className="submit-button" type="submit">
          Get exchange rate
        </button>

        <p className="exchange-rate-result">{result}</p>
        
      </form>
    </>
  );
}

export default ConverterForm;
