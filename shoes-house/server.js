
import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import {fileURLToPath} from "url";


//configure env
dotenv.config();

// database config
connectDB();
const _filename=fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const PORT = process.env.PORT ||8080;
// create rest object because we create a api 
const app = express();

//midelwares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

// routes
 app.use("/api/v1/auth", authRoutes)
 app.use("/api/v1/category", categoryRoutes);
 app.use("/api/v1/product", productRoutes);
 app.use(express.static(path.join(_dirname,'.client/build')))
//rest api
app.use('*',function(req,res){
  res.sendFile(path.join(_dirname,'./client/build/index.html'));
})
// run on port no 8080 so create port no
//run listen
app.listen(PORT,()=>{
    console.log(`${process.env.CONF} server running on ${PORT}`.bgCyan.white)
})