import bodyParser from "body-parser";
import { AppDataSource } from "./config/database";
import  express from "express";
import {userRoutes} from "./routes/userRoutes"
import { orderRoutes } from "./routes/orderRoute";
import { productRoutes } from "./routes/productRoute";

const app= express()

app.use(bodyParser.json())

app.use('/api/user',userRoutes)
app.use('/api/order',orderRoutes)
app.use('/api/product',productRoutes)


AppDataSource.initialize().then(async ()=>{
    app.listen(8400,()=>{
        console.log("Server running!")
    })
}).catch((error)=>{console.log("Error occured while initializing: ",error)})
