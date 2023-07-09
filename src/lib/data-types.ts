export interface Movie {
  id: number;
  title: string;
  description: string;
  release_date: string;
  poster_url: string;
  age_rating: number;
  ticket_price: number;
}

export interface User {
  name: string | null;
  email: string;
  image: string;
  id: number;
  birthDate: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
}

export interface TopUpBalanceMethod {
  logoSrc: string;
  title: string;
}
