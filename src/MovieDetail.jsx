import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return <p>Movie not found!</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <p className="mb-6">{movie.description}</p>
      <div className="mb-6">
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button onClick={() => navigate('/')} className="bg-yellow-400 text-white py-2 px-4 rounded">
        Back to Home
      </button>
    </div>
  );
}

export default MovieDetail;
