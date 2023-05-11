import React from "react";
import MovieItem from "./MovieItem";

function MovieList(props) {
  const { movies, onDelete } = props;

  return (
    <ul id="movies">
      {movies.map((movie, index) => (
        <MovieItem
          key={index}
          index={index}
          title={movie.title}
          rating={movie.rating}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default MovieList;
