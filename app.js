import axios from 'axios';

const API_URL = `https://api.openweathermap.org/data/2.5/weather?zip=`;

const API_KEY = '2d363a4042da075aa14d4e5c8eddf71f';
const LOCATION_ZIP_CODE = '29488';
const COUNTRY_CODE = 'us';

// API Specific settings
const ENTIRE_API_URL = `${API_URL}${LOCATION_ZIP_CODE},${COUNTRY_CODE}&appid=${API_KEY}`;

axios
	.get(ENTIRE_API_URL)
	.then(response => console.log(response.data.main.temp))
	.catch(error => console.log('Error', error));
