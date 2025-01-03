import {Server} from 'socket.io';

class SocketService {
    private _io : Server; 

    constructor() {
        console.log('Init Socket Server...');
        this._io = new Server();
    }
    
    public initListeners() {
        const io = this._io; 
        io.on('connect', (socket) => {
            console.log(`New Socket Connected`, socket.id); 
        });
    }

    get io(){
        return this._io;
    }
}

export default SocketService;