let numberOfFilms; 

function start(){
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMoovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
  
        if(a !== '' && b !== '' && a !== null && b !== null && a.length < 50) {
          personalMoovieDB.movies[a] = b;
        } else {
          i--;
        }
  }
}

rememberMyFilms();


function detectPersonalLevel() {
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
}

detectPersonalLevel();

function showMyDB (hidden) {
  if (!hidden) {
    console.log(personalMoovieDB);
  }
}

showMyDB(personalMoovieDB.privat);


function writeYourGenres(){
  for (let i = 0; i < 3; i++){
    personalMoovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
  }
}

writeYourGenres();




