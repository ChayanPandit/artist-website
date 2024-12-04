import React from "react";
import type { Artwork } from "../data/artworks";
import ArtworkCard from "./ArtworkCard";

interface ArtworkGridProps {
  artworks: Artwork[];
  columns?: number;
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks, columns = 4 }) => {
  const distributedColumns: Artwork[][] = Array.from({ length: columns }, () => []);
  artworks.forEach((artwork, index) => {
    distributedColumns[index % columns].push(artwork);
  });
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-1`}>
    {distributedColumns.map((column, columnIndex) => (
      <div key={columnIndex} className="flex flex-col gap-1">
        {column.map((artwork) => (
          <ArtworkCard key={artwork.id} {...artwork} />
        ))}
      </div>
    ))}
  </div>
  );
};

export default ArtworkGrid;

