'use strict';

let numberOfFilms = '';
let lastWatchedMovie = '';
let userRate = '';

while (!numberOfFilms
  || (!lastWatchedMovie || (lastWatchedMovie !== null && lastWatchedMovie.length > 50)) 
  || !userRate) 
  {
     numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
     lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', '');
     userRate = prompt('На скольок оцените его?', '');
  }

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.movies[lastWatchedMovie] = userRate;

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}

// let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   let a = prompt('Один из последних просмотренных фильмов?', '');
//   let b = prompt('На скольок оцените его?', '');

//         if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
//           personalMovieDB.movies[a] = b;
//           console.log('done');
//         } else {
//           console.log('error');
//           i--;
//         }
// }

// if (personalMovieDB.count < 10) {
//   alert('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//   alert('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//   alert('Вы киноман');
// } else {
//   alert('Произошла ошибка');
// }

console.log(personalMovieDB);