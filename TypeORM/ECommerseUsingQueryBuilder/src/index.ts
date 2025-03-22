import express from 'express';
import { productRoutes } from './routes/productRoutes';
import { AppDataSource } from './config/database';

const app = express();

app.use(express.json());
app.use('/api/product', productRoutes);

AppDataSource.initialize().then(async ()=>{
    app.listen(3000,()=>{
        console.log("Server running on port 3000")
    })
}).catch((error)=>{console.log("Error occured while initializing: ",error)})
