const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/'){
        res.write('<html>')
        res.write('<head> <title> Custom Response </title></head>')
        res.write('<body> hello from node.js server</body>')
        res.write('</html>')
        return res.end()
    }
    
    if (url === '/home'){
        res.write('<html>')
        res.write('<head> <title> Custom Response </title></head>')
        res.write('<body> welcome home</body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/about'){
        res.write('<html>')
        res.write('<head> <title> Custom Response </title></head>')
        res.write('<body> welcome to about us page</body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/node'){
        res.write('<html>')
        res.write('<head> <title> Custom Response </title></head>')
        res.write('<body> welcome to my node js project</body>')
        res.write('</html>')
        return res.end()
    }

})

server.listen(4000)