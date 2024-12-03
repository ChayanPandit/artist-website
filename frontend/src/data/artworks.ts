export interface Artwork {
  id: string;
  title: string;
  image: string;
  description: string;
  year: string;
  category: string;
  dimensions?: string;
  medium?: string;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Abstract Harmony",
    image: "/images/art (1).jpg",
    description: "Oil on canvas exploring the relationship between color and emotion",
    year: "2023",
    category: "Painting",
    dimensions: "36\" x 48\"",
    medium: "Oil on canvas"
  },
  {
    id: "2",
    title: "Urban Dreams",
    image: "/images/art (2).jpg",
    description: "Mixed media piece reflecting city life",
    year: "2023",
    category: "Mixed Media",
    dimensions: "24\" x 36\"",
    medium: "Mixed media on paper"
  },
  {
    id: "3",
    title: "Nature's Whisper",
    image: "/images/art (3).jpg",
    description: "Watercolor interpretation of natural forms",
    year: "2022",
    category: "Watercolor",
    dimensions: "18\" x 24\"",
    medium: "Watercolor on paper"
  },
  {
    id: "4",
    title: "Digital Existence",
    image: "/images/art (4).jpg",
    description: "Digital art exploring modern life",
    year: "2023",
    category: "Digital",
    dimensions: "4K resolution",
    medium: "Digital artwork"
  },
  {
    id: "5",
    title: "Sunset Reflections",
    image: "/images/art (5).jpg",
    description: "A study of light and shadow during golden hour",
    year: "2023",
    category: "Painting",
    dimensions: "30\" x 40\"",
    medium: "Acrylic on canvas"
  },
  {
    id: "6",
    title: "Geometric Dreams",
    image: "/images/art (6).jpg",
    description: "Abstract exploration of geometric shapes and patterns",
    year: "2022",
    category: "Digital",
    dimensions: "4K resolution",
    medium: "Digital artwork"
  }
];

export const getFeaturedArtworks = () => artworks.slice(0, 4);
export const getAllArtworks = () => artworks;
export const getArtworkById = (id: string) => artworks.find(artwork => artwork.id === id);