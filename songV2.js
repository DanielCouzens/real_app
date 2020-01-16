// 1 / make it possible to copy and paste multiple bars....

// 2 / if value of input of chord is large then reduce font size to fit chords in the bars div.

const new_section_form = document.createElement("form");
new_section_form.className = "new_section_form";

const new_section_cont = document.createElement("div");
new_section_cont.className = "new_section_cont";

const new_section_btn = document.createElement("button");
new_section_btn.className = "new-section-btn";

const new_section_btnText = document.createTextNode("Add Section");
new_section_form.appendChild(new_section_cont);
new_section_cont.appendChild(new_section_btn);
new_section_btn.appendChild(new_section_btnText);

// var for creating new song sections
const add_section = document.querySelector("#add-section");
// var targeting the add music input
const add_music = document.querySelector("#add-music");
// variable for adding chords
const chart_form = document.querySelector("#chart-form");
// var targeting chord input element
const add_chord = document.querySelector("#add-chord");
// variable for chords
const clear_chords = document.querySelector(".clear-c");

//*************************************************** */
// VARS FOR TIME SIGNATURE
//*************************************************** */

//times sig top form
const timeFormTop = document.querySelector("#time-sig-form-top");
let timeSigTop = document.querySelector("#time-sig-input-top");
// time sig bot form
const timeFormBot = document.querySelector("#time-sig-form-bot");
const timeSigBot = document.querySelector("#time-sig-input-bot");

//*************************************************** */
// VARS FOR SONG TITLE
//*************************************************** */

// const song_title_form = document.querySelector("#song-title-form");

// // variable for the input of song title
// const song_title = document.querySelector("#song-title");

//*************************************************** */
// GLOBAL SCOPE EVENT LISTENERS
//*************************************************** */

loadEventListeners();

function loadEventListeners() {
  // adds song title
  // song_title_form.addEventListener("submit", addTitle);

  // adds initial section // also targeted by add button
  add_section.addEventListener("submit", createMusicalSection);

  // clears all chords and section titles
  clear_chords.addEventListener("click", clearAll);
  // time signature
  timeFormTop.addEventListener("submit", timeSig);

  // timeFormBot.addEventListener('submit' ,timeBot);
  timeFormBot.addEventListener("submit", tempo);
}

//*************************************************** */
// TIME SIGNATURE FUNCTION
//*************************************************** */

let countClicksSig = 0;

function timeSig(e) {
  if (timeSigTop.value === "") {
    alert("Please enter time signature");
  } else {
    countClicksSig += 1;

    switch (countClicksSig) {
      case 1:
        // create element
        const timeDiv = document.createElement("div");
        timeDiv.className = "js-time-sig-top";
        // create content
        const timeValue = document.createTextNode(timeSigTop.value);

        timeDiv.appendChild(timeValue);

        document.querySelector(".sigs-div").appendChild(timeDiv);
        // create a delete marker
        const del = document.createElement("a");
        // create class
        del.className = "remove-cross";
        // add delete to html
        del.innerHTML = '<i class="fa fa-remove"></i>';
        //append to div
        timeDiv.appendChild(del);

        // target white space button
        const white = document.querySelector(".whiteBtn");
        let deleteClear = document.getElementsByClassName("remove-cross");
        deleteClear = Array.from(deleteClear);

        loadEventListeners();

        function loadEventListeners() {
          del.addEventListener("click", removeChord);
          white.addEventListener("click", deleteCross);
        }

        function removeChord(e) {
          if (e.target.parentElement.classList.contains("remove-cross")) {
            e.target.parentElement.parentElement.remove();
            countClicksSig = 0;
          }

          e.preventDefault(); //removeChord
        }

        function deleteCross(e) {
          deleteClear.forEach(function(wiper) {
            wiper.remove();
          });

          e.preventDefault();
        }
        break;
      default:
        alert("Time Signature Already Entered");
        break;
    }
  }

  e.preventDefault();
}

//*************************************************** */
// TEMPO BPM SIGNATURE FUNCTION
//*************************************************** */

let countClicksTempo = 0;

function tempo(e) {
  if (timeSigBot.value === "") {
    alert("Please enter tempo");
  } else {
    countClicksTempo += 1;

    switch (countClicksTempo) {
      case 1:
        const tempDiv = document.createElement("div");
        tempDiv.className = "tempo";

        const tempValue = document.createTextNode(timeSigBot.value);

        tempDiv.appendChild(tempValue);

        document.querySelector(".tempo-div").appendChild(tempDiv);

        const bpm = document.createTextNode("bpm");
        bpm.className = "bpm";
        tempDiv.appendChild(bpm);

        // create a delete marker
        const del = document.createElement("a");
        // create class
        del.className = "remove-cross";
        // add delete to html
        del.innerHTML = '<i class="fa fa-remove"></i>';
        //append to div
        tempDiv.appendChild(del);

        // target white space button
        const white = document.querySelector(".whiteBtn");

        let deleteClear = document.getElementsByClassName("remove-cross");

        deleteClear = Array.from(deleteClear);

        loadEventListeners();

        function loadEventListeners() {
          del.addEventListener("click", removeTempo);
          white.addEventListener("click", deleteCross);
        }

        //*************************** */

        // THIS DELETES TEMPO

        //*************************** */

        function removeTempo(e) {
          if (e.target.parentElement.classList.contains("remove-cross")) {
            e.target.parentElement.parentElement.remove();
            countClicksTempo = 0;
          }

          e.preventDefault(); //removeChord
        }

        function deleteCross(e) {
          deleteClear.forEach(function(wiper) {
            wiper.remove();
          });

          e.preventDefault(); //deleteCross
        }
        break;
      default:
        alert("Tempo Already Entered");
        break;
    }
  }

  e.preventDefault();
}

//*************************************************** */
// NEW SONG SECTION FUNCTION
//*************************************************** */

function createMusicalSection(e) {
  // Parent Song structure div
  const section = document.createElement("section");
  section.className = "new-section";

  const section_form = document.createElement("div");
  section_form.className = "new-section-form";

  // Musical Structure Form -- allows you to add song title
  const music_form = document.createElement("form");
  music_form.className = "music-form";
  const music_cont = document.createElement("div");
  music_cont.className = "music-cont";
  const music_input = document.createElement("input");
  music_input.id = "music-input";
  const m_btn = document.createElement("button");
  m_btn.className = "m-btn";
  const m_btnText = document.createTextNode("Type");
  music_form.appendChild(music_cont);
  music_cont.appendChild(music_input);
  music_cont.appendChild(m_btn);
  m_btn.appendChild(m_btnText);
  section_form.appendChild(music_form);

  // Chord Input Form -- allows you to add  chords
  const chord_form = document.createElement("form");
  chord_form.className = "chart_form";
  const chart_cont = document.createElement("div");
  chart_cont.className = "chart_cont";
  const input = document.createElement("input");
  input.id = "add-chord";
  const btn = document.createElement("button");
  btn.className = "c-btn";
  const btnText = document.createTextNode("Chord");
  chord_form.appendChild(chart_cont);
  chart_cont.appendChild(input);
  chart_cont.appendChild(btn);
  btn.appendChild(btnText);
  section_form.appendChild(chord_form);

  const section_title = document.createElement("h2");
  section_title.className = "new-section-title";

  const section_chords = document.createElement("div");
  section_chords.className = "new-section-chords";

  section.appendChild(section_form);
  section.appendChild(section_title);
  section.appendChild(section_chords);
  document.querySelector(".chart").appendChild(section);
  document.querySelector("#music-input").placeholder = "intro verse chorus etc";
  document.querySelector("#add-chord").placeholder = "enter chord";

  // New Btn -- allows you to add new section for song structure (not yet active 12:32 21/05/18)
  const newBtn = document.createElement("button");
  newBtn.className = "newBtn";
  const newBtnText = document.createTextNode("Add");
  newBtn.appendChild(newBtnText);
  section_form.appendChild(newBtn);

  // Delete btn for section forms -- allows you to delete section of song structure
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "section-delete-btn";
  const deleteBtnText = document.createTextNode("Delete");
  deleteBtn.appendChild(deleteBtnText);
  section_form.appendChild(deleteBtn);

  // Tidy Btn target white space button
  const white = document.querySelector(".whiteBtn");
  // target the element that parents the forms for creating new sections of chart
  let wiper = document.getElementsByClassName("new-section-form");
  wiper = Array.from(wiper);

  //********************************* */
  // EVENT LISTENS

  // SECTION TITLE FORM
  // CHORD FORM
  // NEW SECTION BUTTON
  // DELETE SECTION BUTTON
  /********************************** */

  loadEventListeners();

  function loadEventListeners() {
    music_form.addEventListener("submit", musicalTitle);
    white.addEventListener("click", pow);
    deleteBtn.addEventListener("click", removeSection);
    chord_form.addEventListener("submit", createChart);
    newBtn.addEventListener("click", createMusicalSection);
  }

  // allows you to tidy the document by removing all input fields and delete crosses.
  function pow(e) {
    wiper.forEach(function(wiper) {
      wiper.remove();
    });

    e.preventDefault();
  }

  //******************************** */
  // SECTION TITLE FUNCTION

  // //note: this is inside the new
  // song section function
  /********************************** */

  let countClicksTitle = 0;

  function musicalTitle(e) {
    if (music_input.value === "") {
      alert("Please enter title for song section");
    } else {
      countClicksTitle += 1;

      switch (countClicksTitle) {
        case 1:
          // create element type
          const h2 = document.createElement("h2");
          // add class name
          h2.className = "musical-title";
          // create element content
          const mTitle = document.createTextNode(music_input.value);
          // append the input value to the h2
          h2.appendChild(mTitle);
          // append content to element
          section_title.appendChild(h2);

          // create a delete marker
          const del = document.createElement("a");
          // create class
          del.className = "remove-cross";
          // add delete to html
          del.innerHTML = '<i class="fa fa-remove"></i>';
          //append to div
          h2.appendChild(del);

          // target white space button
          const white = document.querySelector(".whiteBtn");
          let deleteClear = document.getElementsByClassName("remove-cross");
          deleteClear = Array.from(deleteClear);

          loadEventListeners();

          function loadEventListeners() {
            del.addEventListener("click", removeSectionTitle);
            white.addEventListener("click", deleteCross);
          }

          //*************************** */

          // THIS DElETES SECTION TITLE

          //*************************** */

          function removeSectionTitle(e) {
            if (e.target.parentElement.classList.contains("remove-cross")) {
              e.target.parentElement.parentElement.remove();
              countClicksTitle = 0;
            }

            e.preventDefault(); //removeChord
          }

          function deleteCross(e) {
            deleteClear.forEach(function(wiper) {
              wiper.remove();
            });

            e.preventDefault(); //deleteCross
          } // delete cross function MUSICAL TITLE FUNCTION

          break;
        default:
          alert("Section title already added");
          break;
      } //switch statement MUSICAL TITLE FUNCTION
    } //else statement MUSICAL TITLE FUNCTION

    e.preventDefault(); //musicalTitle
  } // MUSICAL TITLE FUNCTION

  //******************************** */
  // CHORD FUNCTION

  // //note: this is inside the new
  // song section function
  /********************************** */

  function createChart(e) {
    //*************************************************** */
    // Repeat Element Musical Symbol
    // note: this is created before everything else so it appends in the correct position
    //*************************************************** */

    let repeatClick = 0;
    let repeatClicks = 0;

    // Beginning of repeat symbol
    const repeatSymbol = document.createElement("div");
    repeatSymbol.className = "repeatSymbol";
    const dotTop = document.createElement("div");

    dotTop.innerHTML = '<i class="fa fa-circle" id="circleTop"></i>';
    const dotBottom = document.createElement("div");
    dotBottom.innerHTML = '<i class="fa fa-circle" id="circleBot"></i>';

    repeatSymbol.appendChild(dotTop);
    repeatSymbol.appendChild(dotBottom);

    // Times to repeat
    const timesRepeat = document.createElement("div");
    timesRepeat.className = "timesRepeat";
    let timesRepeatNum = document.createTextNode(repeatClicks);
    timesRepeatNum.className = "timesRepeatNum";

    // Ending Symbol
    const repeatSymbolEnd = document.createElement("div");
    repeatSymbolEnd.className = "repeatSymbolEnd";
    const dotTopEnd = document.createElement("div");
    dotTopEnd.innerHTML = '<i class="fa fa-circle" id="circleTopEnd"></i>';
    const dotBottomEnd = document.createElement("div");
    dotBottomEnd.innerHTML = '<i class="fa fa-circle" id="circleBotEnd"></i>';
    repeatSymbolEnd.appendChild(dotTopEnd);
    repeatSymbolEnd.appendChild(dotBottomEnd);

    //*************************************************** */

    // CHORD BOX CREATION AND LAYOUT

    //*************************************************** */

    // Creates Chord Box
    const div = document.createElement("div");
    // add class name
    div.className = "bars";
    // Creates Edit Options Box
    // (contains repeat beg / edit / delete / repeat end symbols)
    const editOptions = document.createElement("div");
    editOptions.className = "editOptions";
    div.appendChild(editOptions);

    // Chord container to help with layout
    const chordCont = document.createElement("div");
    chordCont.className = "chordCont";
    div.appendChild(chordCont);

    // create element content
    const chords = document.createTextNode(input.value);
    const chordName = document.createElement("div");
    chordName.className = "chord-name";
    const chordWrap = document.createElement("div");
    chordWrap.className = "chord-wrap";

    chordName.appendChild(chords);
    chordWrap.appendChild(chordName);
    chordCont.appendChild(chordWrap);

    // append content to element
    section_chords.appendChild(div);
    chordCont.appendChild(repeatSymbolEnd);

    // REPEAT BEGINNING BUTTON -- allows you to add repeat markers
    const repeatBegin = document.createElement("div");
    // add class name
    repeatBegin.className = "repeatBegin";
    // add delete to html
    repeatBegin.innerHTML = "<i>R</i>";

    // append to div called editOptions
    editOptions.appendChild(repeatBegin);

    // EDIT BUTTON -- allows you to edit chord
    const edit = document.createElement("div");
    // add class name
    edit.className = "edit";
    // add delete to html
    edit.innerHTML = '<i class="fa fa-pencil"></i>';

    // append to div called editOptions
    editOptions.appendChild(edit);

    // DELETE BUTTON -- allows you to delete chord
    const del = document.createElement("div");
    // create class
    del.className = "delete-cross";
    // add delete to html
    del.innerHTML = '<i class="fa fa-remove"></i>';

    //append to div called editOptions
    editOptions.appendChild(del);

    // REPEAT ENDING BUTTON -- allows you to add repeat markers
    const repeatEnd = document.createElement("div");
    // add class name
    repeatEnd.className = "repeatEnd";
    // add delete to html
    repeatEnd.innerHTML = "<i>R</i>";

    // append to div called editOptions
    editOptions.appendChild(repeatEnd);

    // target white space button
    const white = document.querySelector(".whiteBtn");

    let deleteClear = document.getElementsByClassName("delete-cross");
    deleteClear = Array.from(deleteClear);

    let deleteEdit = document.getElementsByClassName("edit");
    deleteEdit = Array.from(deleteEdit);

    let deleteRb = document.getElementsByClassName("repeatBegin");
    deleteRb = Array.from(deleteRb);

    let deleteRe = document.getElementsByClassName("repeatEnd");
    deleteRe = Array.from(deleteRe);

    let deleteEditOptions = document.getElementsByClassName("editOptions");
    deleteEditOptions = Array.from(deleteEditOptions);

    loadEventListeners();

    function loadEventListeners() {
      del.addEventListener("click", removeChord);
      white.addEventListener("click", whiteOut);
      edit.addEventListener("click", editChord);
      repeatBegin.addEventListener("click", repeatBegins);
      repeatEnd.addEventListener("click", repeatEnds);
    }

    function repeatBegins(e) {
      repeatClick += 1;

      switch (repeatClick) {
        case 1:
          chordCont.appendChild(repeatSymbol);
          div.style.borderLeftWidth = "7px";
          break;

        case 2:
          div.style.borderLeftWidth = "2px";
          repeatSymbol.remove();
          repeatClick = 0;
          break;
      }
      e.preventDefault();
    }

    function repeatEnds(e) {
      repeatClicks += 1;

      switch (repeatClicks) {
        case 1:
          div.style.borderRight = "2px solid #000";
          break;
        case 2:
          // repeat symbol has been appended before this event to help with layout
          repeatSymbolEnd.style.display = "flex";
          div.style.borderRight = "7px solid #000";
          break;

        case 3:
          repeatSymbolEnd.appendChild(timesRepeat);
          timesRepeat.innerHTML = "x2";
          break;

        case 4:
          timesRepeat.innerHTML = "x3";
          break;

        case 5:
          timesRepeat.innerHTML = "x4";
          break;

        case 6:
          div.style.borderRight = "2px";
          repeatSymbolEnd.style.display = "none";
          timesRepeat.remove();
          repeatClicks = 0;
          break;
      }
      e.preventDefault();
    }

    function removeChord(e) {
      div.remove();

      e.preventDefault(); //removeChord
    }

    function whiteOut(e) {
      deleteClear.forEach(function(wiper) {
        wiper.remove();
      });

      deleteEdit.forEach(function(wiper) {
        wiper.remove();
      });

      deleteRb.forEach(function(wiper) {
        wiper.remove();
      });

      deleteRe.forEach(function(wiper) {
        wiper.remove();
      });

      deleteEditOptions.forEach(function(wiper) {
        wiper.remove();
      });

      div.style.gridTemplateRows = "45px";
      div.style.gridRowGap = "10px";

      timesRepeat.style.background = "none";
      section_chords.style.paddingTop = "0";

      e.preventDefault(); //deleteRepeat
    }

    let countEditClicks = 0;

    function editChord(e) {
      countEditClicks += 1;

      switch (countEditClicks) {
        case 1:
          const editChordsForm = document.createElement("form");
          editChordsForm.className = "editChordsForm";

          const editChordsCont = document.createDocumentFragment("div");
          editChordsCont.className = "editChordsCont";

          const editChordsInput = document.createElement("input");
          editChordsInput.className = "editChordInput";

          const editChordsText = document.createTextNode(editChordsInput.value);

          const editChordsBtn = document.createElement("button");
          editChordsBtn.className = "editChordsBtn";

          const editChordsBtnText = document.createTextNode("Change");
          editChordsBtn.appendChild(editChordsBtnText);
          editChordsCont.appendChild(editChordsInput);
          editChordsCont.appendChild(editChordsBtn);
          editChordsForm.appendChild(editChordsCont);

          div.appendChild(editChordsForm);

          loadEventListeners();
          function loadEventListeners() {
            editChordsForm.addEventListener("submit", changeChord);
          }

          function changeChord(e) {
            chordName.innerHTML = editChordsInput.value;
            editChordsForm.remove();
            editChordsBtn.remove();
            editChordsInput.remove();
            countEditClicks = 0;

            e.preventDefault();
          } // CHANGE CHORD FUNCTION
          break;
      }
    } // EDITCHORD FUNCTION

    e.preventDefault(); //createChart
  } // CREATE CHART FUNCTION

  function removeSection(e) {
    section.remove();

    e.preventDefault();
  }

  e.preventDefault(); //createSection
} //CREATE MUSICAL SECTION FUNCTION

//*************************************************** */
// SONG TITLE FUNCTION
//*************************************************** */

//var for counting clicks
// let countClicksSong = 0;

// function addTitle(e) {
//   if (song_title.value === "") {
//     alert("Please enter song title");
//   } else {
//     countClicksSong += 1;

//     switch (countClicksSong) {
//       case 1:
//         // create element type
//         const h1 = document.createElement("h1");
//         h1.className = "song-title";
//         // create element content
//         const title = document.createTextNode(song_title.value);
//         // append content to element
//         h1.appendChild(title);
//         // target specific div and append created element
//         document.querySelector(".song-title-div").appendChild(h1);
//         // delete crosses
//         const dels = document.createElement("a");
//         // create class
//         dels.className = "deleted-cross";
//         // add delete to html
//         dels.innerHTML = '<i class="fa fa-remove"></i>';
//         //append to div
//         h1.appendChild(dels);
//         // prevent page.1.2 from refreshing
//         const white = document.querySelector(".whiteBtn");
//         let deleteClear = document.getElementsByClassName("deleted-cross");
//         deleteClear = Array.from(deleteClear);
//         loadEventListeners();

//         function loadEventListeners() {
//           dels.addEventListener("click", removeSongTitle);
//           white.addEventListener("click", deleteCross);
//         }

//         // uses the delete icon to remove title and reset countClicks var

//         function removeSongTitle(e) {
//           if (e.target.parentElement.classList.contains("deleted-cross")) {
//             e.target.parentElement.parentElement.remove();
//             countClicksSong = 0;
//           }
//           e.preventDefault();
//         }

//         // allows the tidy btn to target the delete icons

//         function deleteCross(e) {
//           deleteClear.forEach(function(wiper) {
//             wiper.remove();
//           });

//           e.preventDefault();
//         }
//         break;
//       default:
//         alert("Song Title Already Entered");
//         break;
//     }
//   }

//   e.preventDefault();
// }

//*************************************************** */
// VARS FOR CLEAR BTN
//*************************************************** */
const chordClear = document.querySelector(".chart");
const songTitleClear = document.querySelector(".song-title-div");
const tempoClear = document.querySelector(".tempo-div");
const timeClear = document.querySelector(".sigs-div");

// CLEAR FUNCTION
function clearAll() {
  chordClear.innerHTML = "";
  timeClear.innerHTML = "";
  tempoClear.innerHTML = "";
  songTitleClear.innerHTML = "";
}

// vars to get rid of elements ready for printing
const topPage = document.querySelector(".title-top");
const topPageBtn = document.querySelector(".cont");
const chart = document.querySelector(".chart");

// PRINT FUNCTION
function prints() {
  topPageBtn.style.display = "none";
  topPage.style.display = "none";
  chart.style.width = "95%";
  window.print();
}
