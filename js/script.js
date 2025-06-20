const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovueDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', '');
const userRate = prompt('На скольок оцените его?', '');

personalMovueDB.movies[lastWatchedMovie] = userRate;

console.log(personalMovueDB);
