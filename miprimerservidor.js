const http = require('http');

const servidor = http.createServer((req, res) => 
{ 
    console.log('===> req (solicitud)');
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders());
    res.end('Hola mundo');
});

const puerto = 3000;

servidor.listen(puerto, () => 
{
    console.log(`El servidor esta escuchando en http://localhost:${puerto}`);
});