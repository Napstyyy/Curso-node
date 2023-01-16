const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(miURL.hostname); //www.ejemplo.orclg
console.log(miURL.pathname); // /cursor/programacion
console.log(miURL.searchParams);
console.log(miURL.searchParams.get('ordenar'));
console.log(miURL.searchParams.get('nivel'));
console.log(miURL.protocol);