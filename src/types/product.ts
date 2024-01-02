
export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    details: ProductDetails;
};



export interface ProductDetails{
    Material: string;
    Dimensions: string;
    Craftsmanship: string;
    Care_Instructions: string;
}