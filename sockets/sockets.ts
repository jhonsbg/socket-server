import { Socket } from "socket.io";
import socketIO from 'socket.io';

// Escuchar si cliente se desconecta
export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', () => {
        console.log('Ciente desconectado');
    });
}

// Escuchar mensajes
export const mensaje = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('mensaje', (payload: {de: string, cuerpo: string}) => {
        console.log('Mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);
    });
}