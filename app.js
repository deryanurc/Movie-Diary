const form = document.getElementById("movie-form");
const titleElement = document.querySelector("#header-main-movie-name");
const directorElement = document.querySelector("#header-main-director-name");
const urlElement = document.querySelector("#header-main-advert-name");
const cardbody = document.querySelectorAll(".card-body")[1];
const clearAll = document.getElementById("clear-movies");
 
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addMovie);
    document.addEventListener("DOMContentLoaded", function () {
        let movies = Storage.getMoviesFromStorage();
        UI.loadAllMovies(movies);
    });
    cardbody.addEventListener("click", deleteMovie);
    clearAll.addEventListener("click", clearAllMovies);
}


function addMovie(e) {
    e.preventDefault();
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        UI.displayMessages("Fill all inputs..", "alert");
    }
    else {
        const newMovie = new Movie(title, director, url);
        UI.addMovieToUI(newMovie);
        Storage.addMovieToStorage(newMovie);
        UI.displayMessages("Movie added successfully...", "success");
    }
    UI.clearInputs(titleElement, urlElement, directorElement);

}

function deleteMovie(e) {
    if (e.target.id === "delete-movie") {
        UI.deleteMovieFromUI(e.target);
        Storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Movies deleted successfully", "success");

    }

}

function clearAllMovies() {

    if (confirm("Are you sure?")) {
        UI.clearAllMoviesFromUI();
        Storage.clearAllMoviesFromStorage();

    }

}