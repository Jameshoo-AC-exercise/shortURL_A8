// characters include 0-9、a-z、A-Z
const BASE_62_CHAR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

/**
 * 
 * @param {number} shortenLength 
 * @returns short characters for URL
 */

function shortenURL(shortenLength) {
  let shortChar = ""

  for (let i = 0; i < shortenLength; i++) {
    const randomIndex = Math.floor(Math.random() * BASE_62_CHAR.length)
    shortChar += BASE_62_CHAR[randomIndex]
  }

  return shortChar
}

module.exports = shortenURL

