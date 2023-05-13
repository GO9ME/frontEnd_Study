const http = require('http')
const fs = require('fs')
const fsPromises = require('fs').promises;
const PORT = 3000;

const server =  http.createServer();
server.on('request', async (req, res) => {
    try {
        const data = await fsPromises.readFile('./data/mydata.txt')
        res.end(data)
    } catch (err) {
        console.log(err)
    }
})


server.listen(PORT, () => {
    console.log('서버 시작', PORT)
})