import React, { useEffect, useState } from "react";
import type { Artwork } from "../types/artworks";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  const { image, title, description, inspiration, tags, sold, price, createdAt } = artwork;
  const [isOpen, setIsOpen] = useState(false);
  const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const md_breakpoint = 768;
    const w_96 = 384;
    const width = Math.floor(window.innerWidth * 0.95 - (window.innerWidth > md_breakpoint ? w_96 : 0));
    const height = Math.floor(window.innerHeight * 0.95);
    setScreenDimensions({ width, height });
  }, []);


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
            className="max-w-screen md:flex bg-white rounded-lg max-h-screen p-4 relative m-4 md:overflow-visible overflow-y-auto"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-50 bg-white px-2 py-0.5 rounded-full"
            >
              ✕
            </button>

            <InnerImageZoom
              className="w-full md:w-auto"
              src={`${image}?sharp=30&fit=fill&w=${screenDimensions.width}&h=${screenDimensions.height}&q=80`}
              zoomSrc={`${image}?sharp=60&q=100`}
              hasSpacer
              zoomPreload
              fullscreenOnMobile
              mobileBreakpoint={1080}
            />

            <div className="max-h-96 md:h-auto md:w-96 flex flex-col p-4 gap-4 justify-between">
              <h2 className="text-2xl font-bold">{title}</h2>
              <div className="flex flex-col gap-4 overflow-y-auto ">                 
                <p className="text-gray-700 text-wrap whitespace-pre-wrap break-words">{inspiration}</p>

                <p className="text-gray-700 text-wrap whitespace-pre-wrap break-words">{description}</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="text-gray-700 font-semibold">
                  <p>Status: {sold ? "Sold" : "Available for Sale"}</p>
                  {sold ? (
                    <p>Price Sold: ${price || "0"}</p>
                  ) : (
                    <p>Minimum Price: ${price || "0"}</p>
                  )}
                </div>

                {tags && tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-gray-500 text-sm">Created on: {new Date(createdAt).toLocaleDateString()}</p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ArtworkCard;
