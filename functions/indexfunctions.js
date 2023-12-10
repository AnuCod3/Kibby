/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

/* local server code nodejs
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
})*/
