const currencyCodes=[
    'INR','USD','NPR'
]


function CurrencySelect({selectedCurrency,handleCurrency}) {
    const countryCodes=selectedCurrency.substring(0,2)
  return (
    <>
      <div className="currency-select">
        <img src={`https://flagsapi.com/${countryCodes}/flat/64.png`} alt="flag" />
        <select className="currency-dropdown" value={selectedCurrency}
        onChange={handleCurrency}>

        {currencyCodes.map(currency=>(
            <option value={currency} key={currency}>{currency}</option>
        ))}
          
          {/* <option value="INR">INR</option>
          <option value="NPR">NPR</option> */}
        </select>
      </div>
    </>
  );
}

export default CurrencySelect;
