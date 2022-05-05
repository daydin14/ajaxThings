// How to request data from an API using javaScript and jQuery

// There are many ways to do this!
// 1. jQuerys $.ajax() function
// 2. The Browser's fetch() function
// 3. Using the Axios http client library

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=f310df13";
$.ajax(url).then(function (data) {
  console.log("movie data is ready");
  console.log(data);
});
