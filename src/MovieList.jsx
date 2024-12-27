// MovieList.jsx
import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default MovieList;
