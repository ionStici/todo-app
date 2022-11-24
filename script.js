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
}

const app = new App();
