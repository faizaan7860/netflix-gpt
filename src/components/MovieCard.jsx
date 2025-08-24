import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

function MovieCard({ posterPath }) {
  return (
    <div className="w-48 pr-4 transition-transform duration-300 transform hover:scale-110">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
}

export default MovieCard;
