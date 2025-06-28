import express from 'express'  ;
import cors from 'cors' ;
import 'dotenv/config' 
import connectDB from './config/db.js';


const app = express() 
const port = 3000 ;

await connectDB()

// middleware 
app.use(express.json()) ;
app.use(cors())  

//API Routes 
app.get('/' , (req , res)=>res.send('server is Live !'))

app.listen(port , ()=>console.log(`server listening at http://localhost:${port}`)) ;