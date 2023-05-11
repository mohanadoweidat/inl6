import React, { useState } from "react";
import MovieList from "./MovieList";
import MovieFormInputs from "./MovieFormInputs";

function MovieForm() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("0");

  function handleAddMovie(newMovie) {
    setMovies([...movies, newMovie]);
  }

  function handleDeleteMovie(index) {
    setMovies((prevMovies) => {
      return prevMovies.filter((_, i) => i !== index);
    });
  }

  function handleSortByTitle() {
    const sortedMovies = [...movies].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setMovies(sortedMovies);
  }

  function handleSortByRating() {
    const sortedMovies = [...movies].sort((a, b) => {
      return b.rating - a.rating;
    });
    setMovies(sortedMovies);
  }

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <MovieFormInputs onAddMovie={handleAddMovie} />

      <hr />

      <h2>Filmer</h2>

      <MovieList movies={movies} onDelete={handleDeleteMovie} />

      <div className="sorting-buttons">
        <button onClick={handleSortByTitle}>Sortera efter titel</button>
        <button onClick={handleSortByRating}>Sortera efter betyg</button>
      </div>
    </div>
  );
}

export default MovieForm;
