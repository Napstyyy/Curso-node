/*const estatusPedido = () => {
    return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido())
        {
            resolve('Pedido exitoso, su pizza esta en camino');
        }
        else
        {
            reject('Ocurrio un error. Por favor intente nuevamente');
        }
    }, 3000);
});

//Esto es literamente...
const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido, rechazarPedido);

//esto
miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });
*/

//Encadenacion de promesas y async await
function ordenarProducto(producto)
{
    return new Promise((resolve, reject) => 
    {
        console.log(`Ordenando: ${producto} de freeCodeCamp.`);
        setTimeout(() => {
            if (producto == 'taza')
            {
                resolve('Ordenando una taza con el logo de FreeCodeCamp');
            }
            else
            {
                reject('Este producto no esta disponible actualmente.');
            }
        }, 2000);
    });
}

function procesarPedido(respuesta)
{
    return new Promise(resolve => {
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: ${respuesta}`);
        setTimeout(() => 
        {
            resolve('Gracias por tu compra. Disfruta tu producto de freeCodeCamp.');
        }, 4000);
    });
}

// ordenarProducto('taza')
//     .then(respuesta => {
//         console.log('respuesta recibida');
//         console.log(respuesta);
//         return procesarPedido(respuesta);
//     })
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada);
//     })
//     .catch(error => {
//         console.log(error);
//     })


// es mejor usar esta forma
async function realizarPedido(producto)
{
    try 
    {
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recibida');
    const respuestaProcesada = procesarPedido(respuesta);
    console.log(respuestaProcesada);
    } catch(error)
    {
        console.log(error);
    }
}

realizarPedido('lapiz');

