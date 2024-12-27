import { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Date.now(),
      title,
      description,
      posterURL,
      rating,
    };
    addMovie(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-black p-6 rounded-lg shadow-xl w-96"
    >
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Add a Movie</h2>
      <input
        type="text"
        placeholder="Movie Title"
        className="mb-2 px-4 py-2 rounded-lg bg-gray-800 text-white w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        className="mb-2 px-4 py-2 rounded-lg bg-gray-800 text-white w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Poster URL"
        className="mb-2 px-4 py-2 rounded-lg bg-gray-800 text-white w-full"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating (0-10)"
        className="mb-4 px-4 py-2 rounded-lg bg-gray-800 text-white w-full"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="0"
        max="10"
        required
      />
      <button type="submit" className="w-full py-2 rounded-lg bg-yellow-400 text-black font-bold">
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
