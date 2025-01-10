export type Artwork = {
  id: string;
  title: string;
  image: string;
  description: string;
  inspiration: string;
  sold: boolean;
  price: number;
  tags?: string[];
  createdAt: Date;
}
