const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function (error, data) {
        if(error) {
            res.writeHead(404)
            res.write('Fehler: Datei nicht gefunden')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function (error) {
    if (error) {
        consol.log('Fehler ist aufgetreten', error)
    } else {
        console.log('Server hört auf den Port ' + port)
    }
})