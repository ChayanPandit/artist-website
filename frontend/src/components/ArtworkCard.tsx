import React from "react";
import type { Artwork } from "../data/artworks";


interface ArtworkCardProps extends Artwork {}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ title, image, tags }) => {
  return (
    <div className={`group relative overflow-hidden rounded artwork ${tags?.join(" ")}`}>
      <img
        src={`${image}?w=400&sharp=20`}
        alt={title}
        className="w-full object-cover rounded transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition">
        <p className="text-white text-center mt-4">{title}</p>
      </div>
    </div>
  );
};

export default ArtworkCard;
