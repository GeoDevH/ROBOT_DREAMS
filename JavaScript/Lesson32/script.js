fetch('https://api-movies-2a7a5-default-rtdb.europe-west1.firebasedatabase.app/movies.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const movies = data;

        for (const movieTitle in movies) {
            const movie = movies[movieTitle];
            const containerId = `card-id${movie.id}`;
            const container = document.getElementById(containerId);
            const cardOverlay = container.querySelector('.card-overlay');
            
            const movieDetails = `
                <div class="card-db">
                    <div class="card-href">
                        <a href="${movie.imdb_url}" target="_blank">${movieTitle}</a>  
                    </div>
                    <div class="card-text">
                        Rating: ${movie.rating}
                    </div>
                </div>
            `;
            
            cardOverlay.innerHTML = movieDetails;
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
