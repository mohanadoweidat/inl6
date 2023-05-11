import React from "react";
import star from './star.png';
import deleteImg from './delete.png';

function MovieItem(props) {
  const { title, rating, index, onDelete } = props;

  function handleDeleteClick() {
    onDelete(index);
  }

  function countStars(starsNumber) {
    return (
      <>
        {Array.from({ length: starsNumber }).map((_, index) => (
          <img key={index} src={star} alt="Starpic" />
        ))}
      </>
    );
  }

  return (
    <li data-grade={rating} data-title={title}>
      {title}
      <img
        src={deleteImg}
        alt="Delete movie"
        className="delete-movie-icon"
        onClick={handleDeleteClick}
      />
      {countStars(rating)}
    </li>
  );
}

export default MovieItem;
