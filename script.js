"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы сегодня посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

let arrName = [];
let arrCount = [];
for (let i = 0; i < numberOfFilms; i++){
    arrName[i] = prompt('Название фильма №'+(i+1),'');
    arrCount[i] = prompt('Ваша оценка?', '');
    personalMovieDB.movies[arrName[i]] = arrCount[i];
}

console.log(personalMovieDB);