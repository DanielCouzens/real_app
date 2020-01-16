//*************************************************** */
// VARS FOR SONG TITLE
//*************************************************** */

const song_title_form = document.querySelector("#song-title-form");
// variable for the input of song title
const song_title = document.querySelector("#song-title");

loadEventListeners();

function loadEventListeners() {
  // adds song title
  song_title_form.addEventListener("submit", addTitle);
}

//*************************************************** */
// SONG TITLE FUNCTION
//*************************************************** */

//var for counting clicks
let countClicksSong = 0;

function addTitle(e) {
  if (song_title.value === "") {
    alert("Please enter song title");
  } else {
    countClicksSong += 1;

    switch (countClicksSong) {
      case 1:
        // create element type
        const h1 = document.createElement("h1");
        h1.className = "song-title";
        // create element content
        const title = document.createTextNode(song_title.value);
        // append content to element
        h1.appendChild(title);
        // target specific div and append created element
        document.querySelector(".song-title-div").appendChild(h1);
        // delete crosses
        const dels = document.createElement("a");
        // create class
        dels.className = "deleted-cross";
        // add delete to html
        dels.innerHTML = '<i class="fa fa-remove"></i>';
        //append to div
        h1.appendChild(dels);
        // prevent page.1.2 from refreshing
        const white = document.querySelector(".whiteBtn");
        let deleteClear = document.getElementsByClassName("deleted-cross");
        deleteClear = Array.from(deleteClear);
        loadEventListeners();

        function loadEventListeners() {
          dels.addEventListener("click", removeSongTitle);
          white.addEventListener("click", deleteCross);
        }

        // uses the delete icon to remove title and reset countClicks var

        function removeSongTitle(e) {
          if (e.target.parentElement.classList.contains("deleted-cross")) {
            e.target.parentElement.parentElement.remove();
            countClicksSong = 0;
          }
          e.preventDefault();
        }

        // allows the tidy btn to target the delete icons

        function deleteCross(e) {
          deleteClear.forEach(function(wiper) {
            wiper.remove();
          });

          e.preventDefault();
        }
        break;
      default:
        alert("Song Title Already Entered");
        break;
    }
  }

  e.preventDefault();
}
