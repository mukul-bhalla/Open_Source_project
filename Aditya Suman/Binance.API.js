// this is a binance api code 
// Aditya Suman 23 april


const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://binance43.p.rapidapi.com/ticker/24hr',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '4f83137143msh3f6247df341532dp14ff1bjsn7e8bd78eae59',
    'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}