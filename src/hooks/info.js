import { useState, useEffect } from 'react';

const useCurrencyInfo = (baseCurrency) => {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    // Fetch currency data from an API, this is an example URL
    fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
      .then(response => response.json())
      .then(data => {
        setCurrencyInfo(data.rates);
      })
      .catch(error => {
        console.error('Error fetching currency data:', error);
      });
  }, [baseCurrency]);

  return currencyInfo;
};

export default useCurrencyInfo;
