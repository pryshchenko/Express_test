const express = require('express')
const expressHandlebars = require('express-handlebars')

const handlers = require('./lib/handlers')
const weatherMiddlware = require('./lib/middleware/weather')

const app = express()

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
    helpers: {
      section: function(name, options) {
        if(!this._sections) this._sections = {}
        this._sections[name] = options.fn(this)
        return null
      },
    },
  }))

app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000


app.use(express.static(__dirname + '/public'))

app.use(weatherMiddlware)

app.get('/', handlers.home)

app.get('/about', handlers.about)

app.use(handlers.notFound)
app.use(handlers.serverError)
if (require.main === module) {
    app.listen(port, () => {
    console.log( `Express запущен на http://localhost:${port}` +
    '; нажмите Ctrl+C для завершения.' )
    })
} else {
    module.exports = app
}
