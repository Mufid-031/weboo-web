/* eslint-disable no-undef */
const express = require('express')
const { getAnimes, getAnimesBySearch } = require('../controllers/animes.cjs')
const router = express.Router()

router.get('/animes', getAnimes)
router.get('/animes/search', getAnimesBySearch)

module.exports = router