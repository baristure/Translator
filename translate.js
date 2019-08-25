function Translate(word, language) {
  this.apikey =
    "trnsl.1.1.20190821T205426Z.84ea5b5069e568f1.7a3a261a386ea47888e1dff9345e1e168fc9f4ab";
  this.word = word;
  this.language = language;

  // XHR Object

  this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback) {
  //Ajax Processing
  const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
  this.xhr.open("GET", endpoint);
  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      const json = JSON.parse(this.xhr.responseText);
      const text = json.text[0];

      callback(null, text);
    } else {
      callback("Error", null);
    }
  };
  this.xhr.send();
};
Translate.prototype.changeParameters = function(newWord, newLanguage) {
  this.word = newWord;
  this.language = newLanguage;
};
