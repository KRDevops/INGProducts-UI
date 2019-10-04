import { Product } from '../product-details/product';

export class Category {
    category_id: number;
    category_name: string;
    products?: Product[];
}
