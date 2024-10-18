import React from "react";
import "./currencyConverter.css";
function CurrencyConverter() {
  return <>
  
    <div className="currency-Converter-main">
        <div className="currency-Converter">
            <h2 className="currency-title">currency converter</h2>

            <form className="converter-form">
                <div className="form-group">
                  <label className="from-lebel">enter amount</label>
                  <input type="number" className="form-input" required/>
                </div>

                <div className="form-group">
                  <div className="form-section">
                    <label className="from-lebel">form</label>
                    <div className="currency-select">
                      <img src="https://flagsapi.com/US/flat/64.png" alt="flag" />
                      <select className="currency-dropdown">
                        <option value="USD" selected>USD</option>
                        <option value="INR">INR</option>
                        <option value="NPR">NPR</option>
                      </select>
                    </div>
                  </div>

                      <div className="swap-icon">
                      <svg width='16'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19"><path d="M32 96l320 0 0-64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-64L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-320 0 0 64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64 320 0z"/></svg>
                      </div>

                  <div className="form-section">
                    <label className="from-lebel">to</label>
                    <div className="currency-select">
                      <img src="https://flagsapi.com/IN/flat/64.png" alt="flag" />
                      <select className="currency-dropdown">
                        <option value="USD">USD</option>
                        <option value="INR" selected>INR</option>
                        <option value="NPR">NPR</option>
                      </select>
                    </div>
                  </div>

                  <button className="submit-button" type="submit">Get exchange rate</button>

                  <p className="exchange-rate-result">1,000 USD = 83620.80 INR</p>
                </div>
            </form>
        </div>
    </div>
  
  </>;
}

export default CurrencyConverter;


