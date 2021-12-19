const express = require("express")
const exphbs = require("express-handlebars")
require("./config/mongoose")
const urlSchema = require("./models/urlSchema")
const routes = require("./routes/router")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true })) // for getting the information of req.body.url req.params
app.use(express.static("public")) // CSS
app.use(routes)

// handlebars settings
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

app.listen(port, () => {
  console.log(`The localhost:${port} is working`)
})