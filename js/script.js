'use script';

const numberoffilms = prompt("сколько филм", "");
console.log(numberoffilms);

const personmov ={
    count: numberoffilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const a = prompt("последний фильм", ""),
      b = prompt("оценка фильма", ""),
      c = prompt("последний фильм", ""),
      d = prompt("оценка фильма", "");

personmov.movies[a]=b;
personmov.movies[c]=d;

console.log(personmov);