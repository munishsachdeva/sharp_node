const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/'){
        res.write('<html>')
        res.write('<head> <title> Custom Response </title></head>')
        res.write('<body> <form action = "/message" method = "POST"> <input type ="text" name = "message"> <button type="submit"> SEND </button> </form> </body>')
        res.write('</html>')
        return res.end()
    }

    if (url === '/message' && method==='POST'){
        fs.writeFileSync('message.txt', 'success')
        res.statusCode = 302
        res.setHeader('Location','/')
        return res.end();
    }

})

server.listen(4000)