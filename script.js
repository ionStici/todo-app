"use strict";

class App {
    uncheckedContainer = document.querySelector(".app__unchecked");
    checkedContainer = document.querySelector(".app__checked");

    form = document.querySelector(".app__input__form");
    input = document.querySelector(".app__input__text-box");
    button = document.querySelector(".app__input__button");

    #uncheckedTodos = [];
    #checkedTodos = [];

    #html = "";
    #html2 = "";

    constructor() {}

    _inputFocus(e) {
        e.preventDefault();

        this.input.style.border = "";
    }

    _submit(e) {
        e.preventDefault();

        this.#uncheckedTodos.push(this.input.value);
        this.input.value = "";

        this._fillUnchecked();
    }
}

const app = new App();
