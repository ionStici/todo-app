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

    _fillUnchecked() {
        // e.preventDefault();

        this.uncheckedContainer.innerHTML = "";

        this.#html = "";

        this.#uncheckedTodos.forEach((item, i, arr) => {
            this.#html += `
            <p class="app__item" data-row="${i}">
                <span class="app__item--check-box"></span>
                <span class="app__item--text">${item}</span>
                <span class="app__item--edit">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 app__item--edit-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </span>
            </p>`;
        });

        this.uncheckedContainer.insertAdjacentHTML("afterbegin", this.#html);
    }
}

const app = new App();
