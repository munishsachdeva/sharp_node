const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/'){
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            }
            else {
                const messages = data.split('\n').filter(message => message.trim() !== '');
                res.write('<html>');
                res.write('<head><title>Custom Response</title></head>');
                res.write('<body>');
                res.write('<h2>Messages:</h2>');
                res.write('<ul>');
                for (const message of messages) {
                    res.write(`<li>${message}</li>`);
                }


        res.write('<html>')
        res.write('<head> <title> Custom Response </title></head>')
        res.write('<body> <form action = "/message" method = "POST"> <input type ="text" name = "message"> <button type="submit"> SEND </button> </form> </body>')
        res.write('</html>')
        return res.end()
        }
    });
}


    if (url === '/message' && method==='POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
            console.log(body)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            const message = parsedBody.split('=')[1]
            fs.writeFileSync('message.txt', message)

        })
        res.statusCode = 302
        res.setHeader('Location','/')
        return res.end();
    }

})

server.listen(4000)