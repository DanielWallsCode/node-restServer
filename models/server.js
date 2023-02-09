import  express  from "express";
import cors from 'cors';
import router from '../routes/usuarios.routes.js';

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios';

        // MIDDLEWARES
        this.middlewares();
        // RUTAS DE MI APLICACION
        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use(cors());

        // !Lectura y Parseo del body
        this.app.use(express.json());

        // DIRECTORIO PUBLICO
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, router);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Escuchando correctamente al puerto', this.port);
        });        
    }
}

export default Server;