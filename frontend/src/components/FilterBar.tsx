import React from "react";

interface FilterBarProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ tags, selectedTag, onTagSelect }) => {
  return (
    <div id="tags" className="flex justify-center mb-8 max-w-2xl mx-auto text-center text-xs sm:text-sm md:text-base whitespace-nowrap" data-tags={tags}>
      <button
        className={`px-1.5 sm:px-4 py-2 hover:text-gray-800 rounded ${!selectedTag ? "text-gray-800" : "text-gray-400"}`}
        onClick={() => onTagSelect(null)}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          className={`px-1.5 sm:px-4 py-2 hover:text-gray-800 rounded ${
            selectedTag === tag ? "text-gray-800" : "text-gray-400"
          }`}
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
