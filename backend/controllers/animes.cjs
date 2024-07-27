/* eslint-disable no-undef */
const axios = require('axios')

const getAnimes = async (req, res) => {
  try {
    const response = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[status]=current&page[limit]=20&page[offset]=${req.query.offset}`
    )
    const animes = response.data
    res.json(animes)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch animes' })
    console.log(error)
  }
}

const getAnimesBySearch = async (req, res) => {
  try {
    const response = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[text]=${req.query.value}&page[limit]=20`
    )
    const animes = response.data
    res.json(animes)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch animes' })
    console.log(error)
  }
}

module.exports = { getAnimes, getAnimesBySearch }
