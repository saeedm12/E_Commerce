import { IProduct } from './product';
export interface ICartProducts 
{
count : number,
_id : string,
product : IProduct,
price : number,
}