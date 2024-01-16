import express from 'express'
import morgan from 'morgan'

const app = express();

//Settings
app.set('port', 4000); //configura el puerto del servidor

//Middlewares (funciones intermedias entre una petición y una respuesta)
app.use(morgan('dev')); //utilizar en desarrollo, permite ver en consola un detalle de las peticiones que se estan haciendo

export default app;