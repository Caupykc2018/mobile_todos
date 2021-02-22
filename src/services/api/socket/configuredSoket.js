import { io } from 'socket.io-client';

export const configuredSocket = io('http://10.10.10.161:3001');
