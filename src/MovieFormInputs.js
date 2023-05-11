import React, { useState } from "react";

function MovieFormInputs(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("0");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!title) {
      alert("Du måste ange en titel!");
      return false;
    }

    if (rating === "0") {
      alert("Du måste ange ett betyg!");
      return false;
    }

    const newMovie = {
      title: title,
      rating: rating,
    };

    props.onAddMovie(newMovie);

    setTitle("");
    setRating("0");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-field">Titel:</label>
      <input
        type="text"
        id="title-field"
        className="form-control"
        value={title}
        onChange={handleTitleChange}
      />

      <label htmlFor="rating-field">Betyg:</label>

      <select
        id="rating-field"
        className="form-control"
        value={rating}
        onChange={handleRatingChange}
      >
        <option value="0">Välj betyg här...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <input type="submit" className="btn btn-success mt-3" value="Spara film" />
    </form>
  );
}
export default MovieFormInputs;
