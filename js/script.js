// How to request data from an API using javaScript and jQuery

// There are many ways to do this!
// 1. jQuerys $.ajax() function
// 2. The Browser's fetch() function
// 3. Using the Axios http client library

// VARIABLES
const url = "http://www.omdbapi.com/?i=tt3896198&apikey=f310df13";

// ELEMENT REFERENCES
const $title = $("#title");
const $year = $("#year");
const $rated = $("#rated");

// EVENT LISTENERS

// FUNCTIONS
function handleGetData() {
  $.ajax(url).then(
    function (data) {
      console.log("movie data is ready");
      console.log(data);

      $title.text(data.Title);
      $year.text(data.Year);
      $rated.text(data.Rated);
      $("main").append(`<img src="${data.Poster}">`);

      // console.log($title);
      // console.log($year);
      // console.log($rated);
    },
    function (error) {
      console.log("something is wrong");
      console.log(error);
    }
  );
}
