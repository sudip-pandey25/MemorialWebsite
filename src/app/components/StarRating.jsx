import React from "react";
import { Star, StarHalf, Star as StarOutline } from "lucide-react";

const StarRating = ({ rating }) => {
  const maxStars = 5;

  return (
    <div className="flex">
      {[...Array(maxStars)].map((_, index) => (
        <span key={index}>
          {index < Math.floor(rating) ? (
            <Star size={20} className="text-yellow-500" />
          ) : (
            <StarOutline size={20} className="text-gray-300" />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
