const http = require('http')
const fs = require('fs')
const fsPromises = require('fs').promises;

const server = http.createServer(async (req, res) => {
    try {
        const data = await fsPromises.readFile('./data/mydata.txt')
        res.end(data)
    } catch (err) {
        console.log(err)
    }
})

const PORT = 3000;
server.listen(3000, () => {
    console.log('port 3000 on')
})