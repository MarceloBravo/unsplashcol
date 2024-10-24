//Para utilizar import se debe agregar la línea  `"type" : "module"`en el archivo config.json (al utilizar import no se puede utilizar require ya que ahora el archivo json se comporta como un módulo)
import cors  from 'cors';   //Evitar el error de CORS
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import bodyParser from 'body-parser';  //Necesario para atender las peticiones post
import rolesRoutes from '../routes/roles.routes.js'
import usuariosRoutes from '../routes/usuarios.routes.js'
import { sequelize } from '../db/database.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname,'/public'))); 

app.set('host', '192.168.43.118')
app.set('port', process.env.PORT || 3001);

//middewares
app.use(morgan('dev')); //Utiliza morgan en modo de develop para mostrar los mensajes por consola
app.use(bodyParser.json()); //Permite recibir y entender los datos recibidos como objeto JSON

app.use(rolesRoutes)
app.use(usuariosRoutes)

import '../models/RolModel.js'
import '../models/UsuarioModel.js'

async function main(){
    try{
        //await sequelize.sync({alter: true})
        console.log('Conexión establecida con la base de datos...')
        //app.listen(app.get('port'), '0.0.0.0',() => { //heroku
        app.listen(app.get('port'), app.get('host'),() => {    
            console.log(`Servidor nodemon activo en ${app.get('host')}:${app.get('port')}`)
        })
        
    }catch(e){
        console.log('Ocurrió un error al conectar con la base de datos:' + e.message)
    }
}

main()