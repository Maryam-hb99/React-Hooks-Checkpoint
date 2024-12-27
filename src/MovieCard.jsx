import React from 'react';

function MovieCard({ movie, onDelete }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <img 
        src={movie.posterURL} 
        alt={movie.title} 
        className="w-full h-64 object-cover hover:opacity-80 transition duration-300" 
      />
      <div className="p-4 text-white">
        <h3 className="font-bold text-xl mb-2">{movie.title}</h3>
        <p className="text-sm mb-4">{movie.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-yellow-500 text-lg font-semibold">Rating: {movie.rating}</span>
          <button
            onClick={() => onDelete(movie.title)}
            className="text-red-500 hover:text-red-700 font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
