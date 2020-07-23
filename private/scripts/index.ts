class UserLanguage {
    #language: string;

    constructor() {
        this.setLanguage ();
    }
    setLanguage () {
        this.#language = "de-DE";
    }
    getLanguage () {
        return this.#language;
    }
}

const myLanguage = new UserLanguage();

alert(myLanguage.getLanguage());