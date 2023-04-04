const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

      if(a !== '' && b !== '' && a !== null && b !== null && a.length < 50) {
        personalMoovieDB.movies[a] = b;
      } else {
        i--;
      }
}

if (personalMoovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
}
else if (personalMoovieDB.count >= 10 && personalMoovieDB.count < 30){
  console.log('Вы классический зритель');
}
else if (personalMoovieDB.count >= 30){
  console.log('Вы киноман');
}
else {
  console.log('Произошла ошибка');
}



console.log(personalMoovieDB);