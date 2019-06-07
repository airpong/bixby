module.exports.function = function availabletime (movie,result) {
  const http = require('http');
  const console = require('console');
  const request = require('request')
  const response = http.getUrl("https://github.com/bixbydevelopers/capsule-samples-collection/blob/master/README.md/",{format:'xml'})
  console.log(response)
  return {}
}
