import React, { useState } from "react";
import type { Artwork } from "../data/artworks";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  const { image, title, description, inspiration, tags } = artwork;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`group relative overflow-hidden rounded artwork ${tags?.join(" ")}`}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={`${image}?w=400&sharp=20`}
          alt={title}
          className="w-full object-cover rounded transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="flex h-full absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition items-center justify-center">
          <p className="text-white text-center shadow-lg">{title}</p>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)} 
        >
          <div
            className="flex flex-col gap-2 md:flex-row bg-white rounded-lg w-auto h-auto max-w-6xl max-h-screen p-4 relative m-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-50 bg-white px-2 py-0.5 rounded-full"
            >
              ✕
            </button>

            <div className="w-full md:w-3/5 h-auto flex items-center justify-center">
              <InnerImageZoom
                src={`${image}?sharp=30&fit=clip&w=1000&h=900`}
                zoomSrc={`${image}?sharp=40&q=100`}
                hasSpacer
                zoomPreload
              />
            </div>

            <div className="w-full md:w-2/5 h-auto flex flex-col justify-start p-4">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-2 text-gray-700">
                {description}
                erhgdfdhjr
                ghjhhgtehjhehmhjh
                erhgdfdhjr
                ghjhhgtehjhehmhjh
                erhgdfdhjr
                ghjhhgtehjhehmhjh
              </p>
              <p className="mt-4 text-gray-700">
                {inspiration}
                erhgdfdhjr
                ghjhhgtehjhehmhjh
                erhgdfdhjr
                ghjhhgtehjhehmhjh
                erhgdfdhjr
                ghjhhgtehjhehmhjh
              </p>
              {tags && (
                <div className="mt-4">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtworkCard;
