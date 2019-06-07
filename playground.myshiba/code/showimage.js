module.exports.function = function showimage (query) {
  const console = require("console");
  const config = require('config');
  const baseURL = config.get("baseUrl");
  const http = require("http");
  const fail = require('fail');
  // 설정한 property(capsule.properties)로부터 데이터를 가져옵니다.
  console.log(query.one);
  console.log(query.many);
  console.log(baseURL);
  result = {}
  if(query.one){
    console.log("a");
    url = baseURL + '1';
    response = http.getUrl(url, {format:"json", cacheTime: 0, returnHeaders:true});
    if(response.status == 404){
      console.log("error");  
    }
    console.log(response);
    result.photo = {url: response.parsed.message, caption: "강쥐"};
    
    
  }
  else{
    console.log("b");
    url = baseURL+'15';
    response = http.getUrl(url, {format:"json", cacheTime: 0, returnHeaders:true});
    console.log(response);
    if(response.status == 404){
      console.log("error");  
    }
    objects = [];
    for(var key in response.parsed.message){
      objects.push({url: response.parsed.message[key], caption: "강쥐"});
    }
    result.photo = objects;
  }
  return result
}
