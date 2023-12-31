
const genreListContainer = document.getElementById("genre-list");
const movieListContainer = document.getElementById("movie-list");
const resultsPerPage = 10; // Number of results per page
const totalResultsToFetch = 100; // Total results you want to fetch


// Function to fetch and display movies by genre
function fetchMoviesByGenre(genreId, page) {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genreId}&page=${page}`
  )
    .then(response => response.json())
    .then(data => {
      const movies = data.results;
      console.log(movies)

      // Display movies
      movies.forEach((movie, index) => {
        movieListContainer.innerHTML += `
        <div>
          <article class="genre-img overflow-hidden">
            <img loading="lazy" class="img-fluid position-relative h-100 w-100" src="${img_path + movie.poster_path}" alt="${movie.title}">
          </article>
          <mov-title class="text-warning w-100">${movie.title}</mov-title>
        </div>
        `
      });

      // Check if we need to fetch more results
      if (
        movies.length < resultsPerPage ||
        movieListContainer.children.length >= totalResultsToFetch
      ) {
        return; // Stop fetching more results
      }

      // Fetch the next page of results
      fetchMoviesByGenre(genreId, page + 1);
    })
    .catch(error => console.error("Error fetching movies:", error));
}

// Function to fetch and display movie genres
function fetchMovieGenres() {
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
    .then(response => response.json())
    .then(data => {
      const genres = data.genres;

      // Display genre buttons
      genres.forEach(genre => {
        const genreButton = document.createElement("button");
        genreButton.textContent = genre.name;
        genreButton.addEventListener("click", () => {
          // Clear previous movie list
          movieListContainer.innerHTML = "";

          // Fetch movies for the selected genre starting from page 1
          fetchMoviesByGenre(genre.id, 1);
        });
        genreListContainer.appendChild(genreButton);
      });
    })
    .catch(error => console.error("Error fetching genres:", error));
}

// Fetch and display movie genres when the page loads
window.addEventListener("load", () => {
  fetchMovieGenres();
});

fetchMoviesByGenre(18, 1)