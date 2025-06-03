const axios = require("axios")

module.exports = {
    stockList : async(req, res) => {
        var url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${process.env.STOCK_API_KEY}`;
        
        const response = await axios.get(url);
        const stockData = response.data

        res.json(stockData)
   
    }
}