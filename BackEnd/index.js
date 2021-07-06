import express from 'express'
import mongoose from 'mongoose';
import bodyparser from 'body-parser';


const app = express();

const PORT = 3000;

//mongo connection 
mongoose.Promise = global.Promise;
//to connect the mongondb to the cloud 
mongoose.connect('mongodb://localhost/soccerDB', {
    userNewUrlParser: true,
    useUnifiedTopology:true,

});
//body parse for the setup
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get('/', (req, res)=> 
res.send(`our soccer application is running 3000 ${PORT}`)
);

app.listen(PORT,() => 
console.log(`your soccer server is running on port ${PORT}`));
