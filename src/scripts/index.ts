class Language {
    #language: string;
    #languageJSON;

    constructor () {
      this.setLanguage();
      this.setLanguageJSON(this.getLanguage());
    }

    /* sets #language to a value */
    setLanguage () {
      if (this.getStorageLanguage() === null) {
        /* navigator.language = browser language */
        this.setStorageLanguage(navigator.language);
      }
      this.#language = this.getStorageLanguage();
    }

    getLanguage () {
      return this.#language;
    }

    setStorageLanguage (lang) {
      window.localStorage.setItem('Language', lang);
      console.log('language was defined and safed in local storage');
    }

    /* returns null if item not defined */
    getStorageLanguage () {
      return window.localStorage.getItem('Language');
    }

    deleteStorageLanguage () {
      window.localStorage.removeItem('Language');
    }

    setLanguageJSON (lang) {
      const url = `http://localhost:8080/language/${lang}.json`;
      let languageObject;

      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const myObj = this.responseText;
          languageObject = myObj;
        }
      };
      xmlhttp.open('GET', url, true);
      xmlhttp.send();
      console.log(languageObject);
      this.#languageJSON = languageObject;
    }

    getLanguageJSON () {
      return this.#languageJSON;
    }

    /* Channges the language to a certain value in the local storage and this class */
    changeLanguage (lang) {
      this.setStorageLanguage(lang);
      this.setLanguage();
      this.setLanguageJSON(this.getLanguage());
    }
}

const languagehandling = new Language();

console.log(languagehandling.getLanguageJSON());
const languageFile = languagehandling.getLanguageJSON();
console.log(languageFile.hello);