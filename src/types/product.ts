
export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    details: ProductDetails;
    description: string;
    starRating : number;
};



export interface ProductDetails{
    Material: string;
    Dimensions: string;
    Craftsmanship: string;
    CareInstructions: string;
}