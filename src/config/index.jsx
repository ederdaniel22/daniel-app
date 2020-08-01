const URL_BACKEND = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://daniel-app-bice.vercel.app/';

export default {
  URL_BACKEND,
};