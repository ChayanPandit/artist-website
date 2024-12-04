import React, { useEffect, useState } from "react";
import type { Artwork } from "../data/artworks";
import ArtworkCard from "./ArtworkCard";

interface ArtworkGridProps {
  artworks: Artwork[];
  columns?: number;
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks, columns = 4 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    setCurrentPage(1);
  }, [artworks]);


  const totalPages = Math.ceil(artworks.length / itemsPerPage);
  const paginatedArtworks = artworks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const distributedColumns: Artwork[][] = Array.from({ length: columns }, () => []);
  paginatedArtworks.forEach((artwork, index) => {
    distributedColumns[index % columns].push(artwork);
  });


  const getPageButtons = () => {
    const pageButtons: (number | string)[] = [];

    if (totalPages === 1) {
      return []
    }

    if (currentPage-1 > 1) {
      pageButtons.push(1);
      if (currentPage-1 > 2) pageButtons.push("...");
    }

    if (currentPage-1 > 0) {
      pageButtons.push(currentPage-1);
    }
    pageButtons.push(currentPage);
    if (currentPage+1 <= totalPages) {
      pageButtons.push(currentPage+1); 
    }

    if (currentPage+1 < totalPages) {
      if (currentPage+1 < totalPages - 1) pageButtons.push("...");
      pageButtons.push(totalPages);
    }

    return pageButtons;
  };

  return (
    <div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1`}>
        {distributedColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-1">
            {column.map((artwork) => (
              <ArtworkCard key={artwork.id} {...artwork} />
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {getPageButtons().map((page, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${
              page === "..." 
                ? "text-gray-400 !p-0" 
              :currentPage === page
                ? "bg-gray-800 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => {
              if (typeof page === "number") setCurrentPage(page);
            }}
            disabled={typeof page === "string"} 
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArtworkGrid;
