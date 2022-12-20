export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: Brand;
    category: Category;
    thumbnail: string;
    images: string[];
}

type Brand =
    | 'Philips'
    | 'Samsung'
    | 'Xiaomi'
    | 'Bosch'
    | 'LG'
    | 'ATLANT'
    | 'BEKO'
    | 'Horizont'
    | 'Media'
    | 'Atlanta'
    | 'DeLonghi';

export type Category = 'Vacuum cleaners' | 'Coffee machines' | 'Fridges' | 'Microwaves' | 'Kettles' | 'Washing machine';

export interface CategoriesProduct {
    name: Category;
    img: string;
}

export type Routes = {
    path: RegExp;
    template: () => void | undefined;
};
