var http = require('http')

var app = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html')
	res.end('Hello World\n')
}).listen(3000)