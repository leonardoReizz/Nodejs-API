import { ProductProps } from "../Model/Product";

export interface IProductRepository {
  create: (product: Omit<ProductProps, '_id'>) => void;
}