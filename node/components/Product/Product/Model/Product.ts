import { model, Schema } from "mongoose";

export type ProductProps = {
  _id: string;
  name: string;
  description: string;
  purchasePrice: number;
  salePrice: number;
}


export const ProduceSchemaProps = new Schema<Omit<ProductProps, 'id'>>(
  {
    name: String,
    description: String,
    purchasePrice: Number,
    salePrice: Number,    
  },{
    timestamps: true,
  }
)

export const DBPRODUCT = model<Omit<ProductProps, '_id'>>('product', ProduceSchemaProps, 'product');