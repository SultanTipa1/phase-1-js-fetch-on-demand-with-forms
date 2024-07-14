document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchByID');
    const movieDetailsSection = document.getElementById('movieDetails');
    const movieTitle = document.getElementById('movieTitle');
    const movieSummary = document.getElementById('movieSummary');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      const id = searchInput.value.trim();
  
      fetchMovieData(id)
        .then(data => {
          // Update the movie details section with the fetched data
          if (data) {
            movieTitle.textContent = data.title;
            movieSummary.textContent = `Summary: ${data.summary}`;
          } else {
            movieTitle.textContent = "Movie Not Found";
            movieSummary.textContent = "";
          }
        })
        .catch(error => {
          console.error('Error fetching movie data:', error);
          movieTitle.textContent = "Error Fetching Data";
          movieSummary.textContent = "";
        });
    });
  
    function fetchMovieData(id) {
      // Simulated movie data - Replace with actual fetch call to your API
      const movies = {
        '1': { title: 'The Brave Little Toaster', summary: 'A story about household appliances' },
        '2': { title: 'The Princess Bride', summary: 'A classic fairy tale adventure' },
        '3': { title: 'Spirited Away', summary: 'A magical journey in the spirit world' }
      };
  
      return new Promise((resolve, reject) => {
        // Simulate API call delay (replace with actual fetch)
        setTimeout(() => {
          if (movies[id]) {
            resolve(movies[id]);
          } else {
            reject(new Error('Movie not found'));
          }
        }, 1000); // Simulated delay of 1 second
      });
    }
  });
  