const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMoovieDB.movies[a] = b;
personalMoovieDB.movies[c] = d;

console.log(personalMoovieDB);




