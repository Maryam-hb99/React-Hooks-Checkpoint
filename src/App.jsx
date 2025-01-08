import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail'; // Import your detail component


function App() {
  const [filterText, setFilterText] = useState('');
  const [filterRating, setFilterRating] = useState('');
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Spider-Man",
      posterURL:
      "https://www.ubuy.ma/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaWQvNjM1MjNiZGQ0OWI5ZWMxNDk4NTRjNzgzLXBvc3Rlci1zdG9wLW9ubGluZS1zcGlkZXItbWFuLW1vdmllLmpwZw.jpg",
      rating: 9.0,
      status: "Released",
      description:
        "After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.",
      trailerLink: "https://www.youtube.com/watch?v=JfVOs4VSpmA&t=2s",
    },
  ]);

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
    const updatedMovies = movies.filter((movie) => movie.title !== title);
    setMovies(updatedMovies);
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
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
                  <AddMovieForm addMovie={addMovie} />
                </div>

                {/* Movie List */}
                <div className="mt-8 p-4">
                  <MovieList
                    movies={movies.filter(
                      (movie) =>
                        movie.title.toLowerCase().includes(filterText.toLowerCase()) &&
                        (filterRating ? movie.rating === parseInt(filterRating) : true)
                    )}
                    onDelete={deleteMovie}
                  />
                </div>
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
