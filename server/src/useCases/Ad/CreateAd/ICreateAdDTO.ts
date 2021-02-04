export interface ICreateAdRequestDTO {
  user_id: string;
  state_id: string;
  category_id: string;
  title: string;
  description: string;
  price: number;
  price_negociable: boolean;
  views?: number;
  status?: string;
  images: object[];
}