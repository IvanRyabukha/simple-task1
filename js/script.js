'use strict';

// let numberOfFilms = '';
// let lastWatchedMovie = '';
// let userRate = '';

// while (!numberOfFilms
//   || (!lastWatchedMovie || (lastWatchedMovie !== null && lastWatchedMovie.length > 50)) 
//   || !userRate) 
//   {
//      numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
//      lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', '');
//      userRate = prompt('На скольок оцените его?', '');
//   }

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// personalMovieDB.movies[lastWatchedMovie] = userRate;

// if (personalMovieDB.count < 10) {
//   alert('Просмотрено довольно мало фильмов')
// } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//   alert('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//   alert('Вы киноман');
// } else {
//   alert('Произошла ошибка');
// }

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', '');
    let b = prompt('На скольок оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  };
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGeners(geners) {
  for (let i = 1; i <= 3; i++) {
    let gener = prompt(`Ваш любимый жанр под номером ${i}`);

    if (gener != null && gener != '' && gener.length < 20) {
      geners.push(gener);
    }
  }
}

writeYourGeners(personalMovieDB.genres);