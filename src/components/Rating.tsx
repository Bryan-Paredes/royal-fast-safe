import React from "react";
import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        const isFull = starValue <= rating;
        const isHalf = starValue - 0.5 < rating && starValue > rating;

        return (
          <Star
            key={index}
            fill={isFull ? "#facc15" : isHalf ? "url(#halfGradient)" : "none"}
            stroke="#facc15"
            className="w-4 h-4"
          />
        );
      })}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="halfGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="50%" stopColor="none" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default RatingStars;
