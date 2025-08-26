export type Product = {
  id: number;
  name: string;
  category: "Men" | "Women" | "Kids" | "Home";
  subCategory: string;
  description: string;
  mrp: number;
  offerPrice: number;
  price: number;
  purchasePrice: number;
  rating: number;
  reviews: number;
  image: string;
};
