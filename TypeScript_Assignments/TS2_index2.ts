// //1
function getLastElement<T>(arr: T[]): T {
    return arr[arr.length - 1];
  }
  
  const numbers = [1, 2, 3, 4];
  const last = getLastElement(numbers); 
  console.log(last); 
  
// //2
interface Product{
    id: number,
    name: string,
    price:number;
}
function displayDetails(){
    const product: Product = {
        id: 101,
        name: "Table",
        price:2000
    };
    console.log(product);
}
displayDetails();


//3
enum OrderStatus{
    Pending,
    Shipped,
    Delivered,
}
function handleStatus(status: OrderStatus) {
    switch(status) {
        case OrderStatus.Pending:
            console.log("Order is pending.");
            break;
        case OrderStatus.Shipped:
            console.log("Order has been shipped.");
            break;
        case OrderStatus.Delivered:
            console.log("Order delivered.");
            break;
        default:
            console.log("Unknown status.");
    }
}
handleStatus(OrderStatus.Pending); 
handleStatus(OrderStatus.Shipped); 
handleStatus(OrderStatus.Delivered); 

