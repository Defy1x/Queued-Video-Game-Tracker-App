// const searchGames = await (val) => {
//   const response = await fetch(`https://api.rawg.io/api/games?key=${ process.env.RAWG_KEY }&search=${ val }`);
//   const data = await response.json();
// }
//
// module.exports = {
//   searchGames
// }


//need to uncomment when ready
// const axios = require('axios');
//
// const rawgApi = axios.create( { baseUrl: 'https://api.rawg.io/api' })
//
// rawgApi.defaults.params.key = process.env.RAWG_KEY;
//
// const useRawgApi = ({
//   route ='/',
//   params = {},
//   method = 'GET',
//   headers = {},
//   data = {}
// }) => {
//   const response = await rawgApi({
//     url: route,
//     data
//     headers,
//     method,
//     params,
//   });
//
//   return response;
// }
//
// module.exports = useRawgApi;
