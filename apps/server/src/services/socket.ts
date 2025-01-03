import {Server} from 'socket.io';

class SocketService {
    private _io : Server; 

    constructor() {
        console.log('Init Socket Server...');
        this._io = new Server();
    }
    
    public initListeners() {
        const io = this._io; 
        console.log('Init socket listeners...');
        io.on('connect', (socket) => {
            console.log(`New Socket Connected`, socket.id); 

            socket.on('event:message', async ({message}: {message:string}) => {
                console.log(`Message Received: ${message}`);
            })
        });
    }

    get io(){
        return this._io;
    }
}

export default SocketService;