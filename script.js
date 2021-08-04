"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?','');

    }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < numberOfFilms; i++){
        const nameMovie = prompt('Название фильма №'+(i+1),''),
              ratingMovie = prompt('Ваша оценка?', '');
    
        if( nameMovie!= null && ratingMovie != null && nameMovie != '' && ratingMovie != '' && nameMovie.length < 50){
            personalMovieDB.movies[nameMovie] = ratingMovie;
        } else {
            i--;
        }
              
    }    

}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB >= 10 && personalMovieDB < 30){
        console.log('Вы классический зритель');
    } else if (personalMovieDB >= 30){
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();


console.log(personalMovieDB);