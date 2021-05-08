const axios = require('axios');

const rawgApi = axios.create( { baseURL: 'https://api.rawg.io/api' })

rawgApi.defaults.params = { key: process.env.RAWG_KEY };

const useRawgApi = async ({
  path ='/',
  params = {},
  method = 'GET',
  headers = {},
  data = {}
}) => {
  try {
    const response = await rawgApi({
      url: path,
      data,
      headers,
      method,
      params,
    });

    return response;
  } catch(err) {
    console.log(err)
  }
}

module.exports = useRawgApi;
