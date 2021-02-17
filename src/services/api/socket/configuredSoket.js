import { io } from 'socket.io-client';

export const configuredSocket = io('http://192.168.56.1:3001');
