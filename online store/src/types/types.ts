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
type Category = 'Vacuum cleaners' | 'Сoffee machines' | 'Fridges' | 'Microwaves' | 'Kettles' | 'Washing machine';
