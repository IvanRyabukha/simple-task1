'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function start() {
    this.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Один из последних просмотренных фильмов?', '').trim();
      let b = prompt('На скольок оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    };
  },
  showMyDB: function () {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function (geners) {
    for (let i = 1; i <= 3; i++) {
      let gener = prompt(`Ваш любимый жанр под номером ${i}`);

      if (gener != null && gener != '' && gener.length < 20) {
        geners.push(gener);
      } else {
        console.log('Вы ввели не корректные данные или не ввели их вовсе');
        i--;
      }
    }

    this.genres.forEach((gen, i) => console.log(`Любимы жанр №${i + 1} - это ${gen}`));
  },
  toggleVisibleMyDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres(personalMovieDB.genres);

personalMovieDB.toggleVisibleMyDB();
