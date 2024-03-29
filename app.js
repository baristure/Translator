// PRototype,Ajax,Callback

eventListeners();

function eventListeners() {
  document
    .getElementById("translate-form")
    .addEventListener("submit", translateWord);
  // Change Language
  document.getElementById("language").onchange = function() {
    // UI processing
    console.log("Event");
    ui.changeUI();
  };
}
const translate = new Translate(
  document.getElementById("word").value,
  document.getElementById("language").value
);
const ui = new UI();

function translateWord(e) {
  translate.changeParameters(
    document.getElementById("word").value,
    document.getElementById("language").value
  );

  translate.translateWord(function(err, response) {
    if (err) {
      // error
      console.log(err);
    } else {
      ui.displayTranslate(response);
    }
  });

  e.preventDefault();
}
