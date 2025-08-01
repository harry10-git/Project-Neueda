const finnhub = require('finnhub');

const finnhubClient = new finnhub.DefaultApi("d25ku19r01qns40ff5bgd25ku19r01qns40ff5c0") // Replace this


// Fetch yesterday's closing price for AAPL
finnhubClient.quote('GOOGL', (error, data, response) => {
    if (error) {
      console.error('API error:', error);
    } else {
      console.log(`Yesterday's closing price: $${data.pc}`);
    }
  });
