import express from 'express'
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routers from './routes/soccerRouters';
import cors from 'cors'

const app = express();

const PORT = 4000;

//mongo connection 
mongoose.Promise = global.Promise;
//to connect the mongondb to the cloud 
mongoose.connect('mongodb://localhost/soccerDB', {
    userNewUrlParser: true,
    useUnifiedTopology: true,

});
//body parse for the setup
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
//CORS setup
app.use(cors());
routers(app);
// index for get
app.get('/', (req, res)=> 
res.send(`our soccer application is running 4000 ${PORT}`)
);
// Listening of the PORT = URL is the local host 4000
app.listen(PORT,() => 
console.log(`your soccer server is running on port ${PORT}`));
