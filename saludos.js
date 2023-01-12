saludar = nombre => `Hola ${nombre}`;
saludarHolaMundo = () => 'Hola Mundo';
module.exports.saludar = saludar;

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};