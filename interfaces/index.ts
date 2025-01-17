export interface CardProps {
    title: string;
    description: string;
  }
  
  export interface ButtonProps {
    label: string;
  }
  
  export interface Address {
    city: string;
    country: string;
  }
  
  export interface PropertyProps {
    name: string;
    rating: number;
    address: Address;
    image: string;
    description: string;
    category: string[];
    price: number;
    reviews: Review[];
  }
  
  export interface Review {
    avatar: string;
    name: string;
    rating: number;
    comment: string;
  }
  