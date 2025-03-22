import { Product } from "../models/product";
import { productRepository } from "../repositories/ProductRepo";


export class ProductService{

    // async createProduct(product:Partial<Product>){
    //     return await productRepository
    //     .createQueryBuilder("product")
    //     .insert()
    //     .values(product)
    //     .execute()
    // }

    async getFilteredProducts(category?:string, priceRange?:string, brand?:string, ratings?:number, sort?:string[]){
        let query= productRepository.createQueryBuilder("product")

        if(category){
            query= query.andWhere("product.category=:category",{category})
        }

        if(priceRange){
            const [minprice, maxprice]= priceRange.split('-').map(Number);
            query= query.andWhere('product.price BETWEEN :minprice AND :maxprice',{minprice,maxprice});
        }

        if(brand){
            query=query.andWhere('product.brand= :brand',{brand})
        }
        if(ratings){
            query=query.andWhere("product.rating >= :ratings",{ratings});
        }
        if(sort){
            sort.forEach(choice=>{
                switch(choice){
                    case 'price-asc': 
                        query= query.orderBy('product.price','ASC');
                        break;
                    case 'price-dsc':
                        query= query.orderBy('product.price','DESC')
                        break;
                    case 'recent':
                        query=query.orderBy('product.createdAt','DESC');
                        break;
                    case 'best':
                        query= query.orderBy('product.sales','DESC')
                        break;
                }
            })
        }
        return await query.getMany()
    }

}

// import { getRepository } from 'typeorm';
// import { Product } from '../entities/Product';

// export class ProductService {
//   private productRepository = getRepository(Product);

//   async getFilteredProducts(category?: string, priceRange?: string, brand?: string, ratings?: number, sort?: string[]) {
//     let query = this.productRepository.createQueryBuilder('product');

//     if (category) {
//       query = query.andWhere('product.category = :category', { category });
//     }
//     if (priceRange) {
//       const [minPrice, maxPrice] = priceRange.split('-').map(Number);
//       query = query.andWhere('product.price BETWEEN :minPrice AND :maxPrice', { minPrice, maxPrice });
//     }
//     if (brand) {
//       query = query.andWhere('product.brand = :brand', { brand });
//     }
//     if (ratings) {
//       query = query.andWhere('product.ratring >= :ratings', { ratings });
//     }
//     if (sort) {
//       sort.forEach(sortOption => {
//         switch (sortOption) {
//           case 'price-asc':
//             query = query.addOrderBy('product.price', 'ASC');
//             break;
//           case 'price-desc':
//             query = query.addOrderBy('product.price', 'DESC');
//             break;
//           case 'newest':
//             query = query.addOrderBy('product.createdDate', 'DESC');
//             break;
//           case 'best-sellers':
//             query = query.addOrderBy('product.sales', 'DESC');
//             break;
//         }
//       });
//     }

//     return await query.getMany();
//   }
// }