// App.js
import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import MovieList from './MovieList';

function App() {
  const [filterText, setFilterText] = useState('');
  const [filterRating, setFilterRating] = useState('');
  const [movies, setMovies] = useState([]);

  // Load movies from localStorage on component mount
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('movies'));
    if (savedMovies) {
      setMovies(savedMovies);
    }
  }, []);

  // Save movies to localStorage whenever the movie list changes
  useEffect(() => {
    if (movies.length > 0) {
      localStorage.setItem('movies', JSON.stringify(movies));
    }
  }, [movies]);

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const deleteMovie = (title) => {
    // Filter out the movie with the matching title
    const updatedMovies = movies.filter((movie) => movie.title !== title);
    setMovies(updatedMovies); // Update state
    localStorage.setItem('movies', JSON.stringify(updatedMovies)); // Save to localStorage
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header with Website Name and Filter Bar */}
      <div className="flex justify-between items-center p-4 bg-black">
        <h1 className="text-3xl font-bold text-yellow-400">Movie Land</h1>
        <Filter 
          filterText={filterText} 
          setFilterText={setFilterText} 
          filterRating={filterRating} 
          setFilterRating={setFilterRating} 
        />
      </div>

      {/* Main Content Area */}
      <div className="flex justify-end items-center mt-8">
        {/* Add Movie Form on the Right */}
        <AddMovieForm addMovie={addMovie} />
      </div>

      {/* Movie List */}
      <div className="mt-8 p-4">
        <MovieList 
          movies={movies.filter(movie => 
            movie.title.toLowerCase().includes(filterText.toLowerCase()) && 
            (filterRating ? movie.rating === parseInt(filterRating) : true)
          )}
          onDelete={deleteMovie} // Pass delete function down to MovieCard
        />
      </div>
    </div>
  );
}

export default App;
