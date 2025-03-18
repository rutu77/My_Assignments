import "reflect-metadata";
import { AppDataSource } from "./database";
import express from "express";
import routes from "./Routes/routes";

const app = express();
app.use(express.json());
app.use(routes);

AppDataSource.initialize().then(async () => {
    app.listen(3000, () => {
        console.log("Server running on port 3000!");
    });
}).catch(error => console.log( error));


// import { AppDataSource } from "./database";
// import { Product14 } from "./product";

// const exp= require("express")
// const app= new exp()

// AppDataSource.initialize().then(async()=>{
//     const productRepository= AppDataSource.getRepository(Product14)

//     const product= productRepository.create({
//         uname:"laptop",
//         category:"hardware",
//         price:45000,
//         stock:2
//     })

//     await productRepository.save(product)
//     console.log("Product saved in database")

//     const product2= productRepository.create({
//         uname:"mouse",
//         category:"periperals",
//         price:1000,
//         stock:4
//     })

//     await productRepository.save(product2)
//     console.log("Product saved in database")

//     const product3= productRepository.create({
//         uname:"router",
//         category:"netwroking",
//         price:10000,
//         stock:1
//     })

//     await productRepository.save(product3)
//     console.log("Product saved in database")

//     const product4= productRepository.create({
//         uname:"Nothing Pro",
//         category:"Mobile",
//         price:24000,
//         stock:7
//     })

//     await productRepository.save(product4)
//     console.log("Product saved in database")


//     // await productRepository.findOneBy()

//     // await productRepository.delete(product)
//     // console.log("Product deleted successfully")

//     // await productRepository.update(2,{uname:"Dell Laptop"})
//     // console.log("Product updated successfully")
// })

// app.listen(3000,()=>{console.log("Server running on port 3000!")})

