module.exports.function = function searchmovie () {
  const config = require('config');
  const fail = require('fail');
  const http = require('http');
  const console = require('console');
  const mykey = '0b78b2dd8c1c77bcdfe61f48627ba8c5';
  let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=0b78b2dd8c1c77bcdfe61f48627ba8c5&language=ko-KR"
  let response = http.getUrl(url, {format:"json", cacheTime: 0, returnHeaders:true});
  console.log(response.parsed.results);
  let objects = [];
  let result = {};
  for(let i=0;i<10;i++){
    let tmp = {};
    let urltmp = {};
    tmp.title = response.parsed.results[i].title;
    tmp.vote = response.parsed.results[i].vote_average;
    urltmp.url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + response.parsed.results[i].poster_path;
    urltmp.caption = response.parsed.results[i].title;
    tmp.poster = urltmp
    console.log(tmp)
    objects.push(tmp)
  }
  result.movie = objects;
  console.log(objects)
  return result
}
