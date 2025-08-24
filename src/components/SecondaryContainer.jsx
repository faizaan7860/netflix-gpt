import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20 pl-12">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList
          title={"We Think You’ll Love These"}
          movies={movies.addPopularMovies}
        />
        <MovieList title={"Animation"} movies={movies.nowPlayingMovies} />
        <MovieList title={"New on NetFlix"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
