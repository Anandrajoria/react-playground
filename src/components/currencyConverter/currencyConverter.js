import React from "react";
import "./currencyConverter.css";
import ConverterForm from "./converterForm";
function CurrencyConverter() {
  return <>
  
    <div className="currency-Converter-main">
        <div className="currency-Converter">
            <h2 className="currency-title">currency converter</h2>

            <ConverterForm/>
        </div>
    </div>
  
  </>;
}

export default CurrencyConverter;


