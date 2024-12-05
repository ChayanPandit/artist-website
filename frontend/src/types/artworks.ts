export interface Artwork {
  id: string;
  title: string;
  image: string;
  description: string;
  inspiration: string;
  category: string;
  dimensions?: string;
  medium?: string;
  tags?: string[];
}
