// How to request data from an API using javaScript and jQuery

// There are many ways to do this!
// 1. jQuerys $.ajax() function
// 2. The Browser's fetch() function
// 3. Using the Axios http client library

// VARIABLES
const url = "http://www.omdbapi.com/?&apikey=f310df13&t=";

// ELEMENT REFERENCES
const $title = $("#title");
const $year = $("#year");
const $rated = $("#rated");
const $form = $("form");
const $input = $(`input[type="text"]`);
// const $i = $(input[type="text"]);   Doesn't work I think.

// EVENT LISTENERS

$form.on("submit", handleGetData);

// FUNCTIONS
function handleGetData(event) {
  event.preventDefault();
  const userInput = $input.val();

  $.ajax(url + userInput).then(
    function (data) {
      console.log("movie data is ready");
      console.log(data);

      $title.text(data.Title);
      $year.text(data.Year);
      $rated.text(data.Rated);
      $("main").append(`<img src="${data.Poster}">`);
    },
    function (error) {
      console.log("something is wrong");
      console.log(error);
    }
  );
}
