import axios from 'axios';

const API_URL_EN = 'https://mh6comk14m.execute-api.us-west-1.amazonaws.com/default/QuintaBlog-GetPosts/?lan=en';
const API_URL_ES = 'https://mh6comk14m.execute-api.us-west-1.amazonaws.com/default/QuintaBlog-GetPosts/?lan=es';

export const getPosts = async (language) => {
  try {
    let API_URL = language === 'es' ? API_URL_ES : API_URL_EN;
    const response = await axios.get(`${API_URL}`);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};