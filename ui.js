class UI{
    static addMovieToUI(newMovie) {
const movieList = document.getElementById("movies");
    
        movieList.innerHTML += `
          <tr>
           <td><img src="${newMovie.url}" class="images"</td>
            <td class="text-1">${newMovie.title}</td>
            <td class="text-1">${newMovie.director}</td>
            <td><a href="#" id="delete-movie" class="btn">Delete Movie</td>
          </tr>
         `;
    }
    
    static clearInputs(element1, element2, element3) {
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }
    static displayMessages(message,_type) {
        const cardBody = document.querySelector(".card-body");
        //Alert divini oluşturma
    
        const div = document.createElement("div");
        div.className = _type;
        div.textContent = message;
        cardBody.appendChild(div);
    
        setTimeout(function () {
            div.remove();
        }, 1000);
        let success;
    
    
    }
    static loadAllMovies(movies) {
        const movieList = document.getElementById("movies");
    
        movies.forEach(function (movie) {
           UI.addMovieToUI(movie);
        });
    }
    static deleteMovieFromUI(element){
        element.parentElement.parentElement.remove();
    }
    
    static clearAllMoviesFromUI(){
    
        const movieList=document.getElementById("movies");
        
        while(movieList.firstElementChild !==null)//child olduğu sürece
        {
            movieList.firstElementChild.remove();
        }
    
    }
}
