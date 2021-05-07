const router = require("express").Router();
const useRawgApi = require('../../services/rawg');

router.all('*', async (req, res) => {
  const {
    body: data
    method,
    query: params,
    headers,
    route
  } = req
  try {
    const response = await useRawgApi({
      data,
      method,
      params,
      route,
      headers
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).json(err);
  }
})
