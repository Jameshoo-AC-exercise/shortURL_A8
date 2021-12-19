const express = require('express')
const router = express.Router()
const urlSchema = require("../models/urlSchema")
const shortenURL = require("../utils/shortenURL")

router.get("/", (req, res) => {
  res.render("index")
})

router.post("/", (req, res) => {
  const targetURL = req.body.url
  const shortURL = shortenURL(5)
  urlSchema.findOne({ originalURL: targetURL })
    .then(data =>
      data ? data : urlSchema.create({ shortURL, originalURL: targetURL })
    )
    .then(data =>
      res.render("index", {
        origin: req.headers.origin,
        shortURL: data.shortURL,
      })
    )
    .catch(error => console.error(error))
})

router.get("/:shortURL", (req, res) => {
  const shortURL = req.params.shortURL
  urlSchema.findOne({ shortURL })
    .then(data => {
      if (!data) {
        return res.render("error", {
          errorMsg: "Can't found the URL",
          errorURL: req.headers.host + "/" + shortURL,
        })
      }
      res.redirect(data.originalURL)
    })
    .catch(error => console.error(error))
})

module.exports = router