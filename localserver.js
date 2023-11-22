const http = require('http')
const fs = require('fs')
const port = 3000

const localserver = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('localserver.html', function (error, data) {
        if(error) {
            res.writeHead(404)
            res.write('Fehler: Datei nicht gefunden')
        } else {
            res.write(data)
        }
        res.end()
    })
})

localserver.listen(port, function (error) {
    if (error) {
        consol.log('Fehler ist aufgetreten', error)
    } else {
        console.log('Server hört auf den Port ' + port)
    }
})


// Playlist von Web Dev anschauen
// 2fka dc