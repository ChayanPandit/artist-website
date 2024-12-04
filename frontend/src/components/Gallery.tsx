import React, { useState } from "react";
import FilterBar from "./FilterBar";
import ArtworkGrid from "./ArtworkGrid";
import type { Artwork } from "../data/artworks";


interface GalleryProps {
  artworks: Artwork[];
}

const Gallery: React.FC<GalleryProps> = ({ artworks }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = artworks.map((art) => art.tags).flat().filter((tag): tag is string => !!tag);
  const uniqueTags = [...new Set(tags)];

  const filteredArtworks = selectedTag
    ? artworks.filter((art) => art.tags?.includes(selectedTag))
    : artworks;

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Gallery</h2>
        <FilterBar
          tags={uniqueTags}
          selectedTag={selectedTag}
          onTagSelect={(tag: string | null) => setSelectedTag(tag)}
        />
        <ArtworkGrid artworks={filteredArtworks}/>
      </div>
    </section>
  );
};

export default Gallery;