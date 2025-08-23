import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

function VideoBg({ movieId }) {
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    console.log("Video API response:", json); // 👈 full object
    console.log("Video results:", json.results); // 👈 array of videos

    // ✅ Filter only trailers
    const trailers = json.results.filter((video) => video.type === "Trailer");
    console.log("Filtered Trailers:", trailers);

    // ✅ Pick first trailer
    const trailer = trailers.length > 0 ? trailers[0] : null;
    console.log("Final Trailer:", trailer);
  };

  useEffect(() => {
    if (movieId) getMovieVideos();
  }, [movieId]);

  return (
    <div className="w-screen">
      <iframe
        id="trailer"
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/d9erkpdh5o0?autoplay=1&mute=1&enablejsapi=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBg;
