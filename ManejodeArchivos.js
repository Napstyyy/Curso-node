const fs = require('fs');

// Mostrar contenido del archivo

fs.readFile('index.html', 'utf-8', (err, contenido) => {
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(contenido);
    }
});

// Renombrar el archivo

fs.rename('index.html', 'main.html', (err) => {
    if(err)
    {
        throw err;
    }
    console.log("nombre cambiado exitosamente");
});

// Agregar algo al final del archivo

fs.appendFile('index.html', '<p>Hola</p>', (err) => {
    if(err)
    {
        throw err;
    }
    console.log('Archivo actualizado');
});


// Reemplazar todo el contenido del archivo

fs.writeFile('index.html', 'Contenido nuevo', (err) => {
    if(err)
    {
        throw err;
    }
    console.log('Contenido reemplazado exitosamente');
});

// Eliminar archivos

fs.unlink('index copy.html', (err) => {
    if(err)
    {
        throw err;
    }
    console.log('Archivo eliminado');
});
