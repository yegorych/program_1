"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы сегодня посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
};

for (let i = 0; i < numberOfFilms; i++){
    const nameMovie = prompt('Название фильма №'+(i+1),''),
          ratingMovie = prompt('Ваша оценка?', '');

    if( nameMovie!= null && ratingMovie != null && nameMovie != '' && ratingMovie != '' && nameMovie.length < 50){
        personalMovieDB.movies[nameMovie] = ratingMovie;
    } else {
        i--;
    }
          
}

console.log(personalMovieDB);