import React, { useRef, useState } from "react";
import FilterBar from "./FilterBar";
import ArtworkGrid from "./ArtworkGrid";
import type { Artwork } from "../types/artworks";


interface GalleryProps {
  artworks: Artwork[];
}

const Gallery: React.FC<GalleryProps> = ({ artworks }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const tags = artworks.map((art) => art.tags).flat().filter((tag): tag is string => !!tag);
  const uniqueTags = [...new Set(tags)];

  const filteredArtworks = selectedTag
    ? artworks.filter((art) => art.tags?.includes(selectedTag))
    : artworks;

  const shuffle = (array: string[]) => { 
    return array.map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value); 
  }; 
  
  const artworkImages = JSON.stringify(shuffle(artworks.map((art) => art.image)).splice(0, 3)); 

  return (
    <section ref={galleryRef} id="gallery" className="py-20 max-w-7xl mx-auto" data-images={artworkImages}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Gallery</h2>
        <FilterBar
          tags={uniqueTags}
          selectedTag={selectedTag}
          onTagSelect={(tag: string | null) => setSelectedTag(tag)}
        />
        <ArtworkGrid artworks={filteredArtworks} galleryRef={galleryRef} />
      </div>
    </section>
  );
};

export default Gallery;
