import  express  from "express";
import cors from 'cors';
import router from '../routes/usuarios.routes.js';
import dbConnection from "../database/config.js";

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios';

        // !CONECTAR A BASE DE DATOS
        this.conectarDB();

        // MIDDLEWARES
        this.middlewares();
        // RUTAS DE MI APLICACION
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
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