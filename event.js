const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProductos) => {
    console.log(`Se realizo una compra por ${total}`);
    console.log(`NUmero de productos ${numProductos}`);
});

emisorProductos.emit('compra', 500, 5);