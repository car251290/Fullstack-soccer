import express from 'express'

const app = express();

const PORT = 3000;

app.get('/', (req, res)=> 
res.send(`our soccer application is running ${PORT}`)
);

app.listen(PORT,()=> 
console.log(`your soccer server is running on port ${PORT}`));
