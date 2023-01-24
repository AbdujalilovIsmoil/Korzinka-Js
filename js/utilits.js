"use strict";

const $ = (selector) => {
  return document.querySelector(selector);
};

const $$ = (selectors) => {
  return document.querySelectorAll(selectors);
};

const creat = (tagName, className, content) => {
  const element = document.createElement(tagName);
  if (className) {
    element.setAttribute("class", className);
  }
  if (content) {
    element.innerHTML = content;
  }
  return element;
};
