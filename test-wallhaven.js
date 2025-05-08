import axios from 'axios';

const WALLHAVEN_API_KEY = process.env.WALLHAVEN_API_KEY;
const BASE_URL = 'https://wallhaven.cc/api/v1';

async function testSearch() {
  try {
    const url = `${BASE_URL}/search?q=space&apikey=${WALLHAVEN_API_KEY}&purity=100`;
    console.log('Testing URL:', url);
    
    const response = await axios.get(url);
    console.log('Wallhaven API Response:');
    console.log('Status:', response.status);
    console.log('Data count:', response.data.data.length);
    console.log('First result:', response.data.data[0]);
  } catch (error) {
    console.error('Error testing Wallhaven API:');
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

testSearch();