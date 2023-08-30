import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import dotenv from 'dotenv';
import path, { dirname } from 'path';

const __dirname = path.resolve();

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

app.use(express.static(path.join(__dirname, "./client/built")));

app.get('*', function (_, res){
    res.sendFile(path.join(__dirname, "./client/built/index.html"), function(err){
        res.status(500).send(err);
    })
})

const PORT = process.env.PORT || 8000;



const server =()=> {
    DBConnection()
    app.listen(PORT,() =>{
        console.log('listening to port:',PORT)
    })
}

server();