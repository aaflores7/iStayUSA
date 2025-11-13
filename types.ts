
export interface Property {
  id: number;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  type: 'Entire home' | 'Private room' | 'Apartment';
  amenities: string[];
  description: string;
  host: {
    name: string;
    avatarUrl: string;
  };
  images: string[];
}

export interface Review {
  id: number;
  author: string;
  avatarUrl: string;
  date: string;
  rating: number;
  text: string;
}

export interface Destination {
  id: number;
  city: string;
  state: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  author: string;
  text: string;
  location: string;
}
