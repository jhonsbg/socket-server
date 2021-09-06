// Constantes o variables globales

//Definición del puerto - process.env.PORT lee el puerto si lo conectamos ej Heroku
const SERVER_PORT: number = Number(process.env.PORT) || 5000;

export default SERVER_PORT;