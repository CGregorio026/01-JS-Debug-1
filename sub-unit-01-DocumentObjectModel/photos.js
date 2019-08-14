/*    Exercise 01_05_01

 *    Photo gallery
 *    Variables and functions
 *    Author: Christian Gregorio
 *    Date: 8.13.19

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var figureCount = 3;
var autoAdvance = setInterval(rightAdvance, 1000);

// apply a src attribute to an image element
function populateFigures(){
   var filename;
   var currentFig;
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

/* open center figure in separate window */
function zoomFig() {

}

// create event listeners to listen for when a certain event listener is fired
function createEventListeners() {
   if (leftarrow.addEventListener) {
      leftarrow.addEventListener("click", leftArrow, false);
      } else if (leftarrow.attachEvent) {
      leftarrow.attachEvent("onclick", leftArrow);
      }
   
   if (rightarrow.addEventListener) {
      rightarrow.addEventListener("click", rightArrow, false);
      } else if (rightarrow.attachEvent) {
      rightarrow.attachEvent("onclick", rightArrow);
      }

   var mainFig = document.getElementsByTagName("img")[1];

   if (mainFig.addEventListener) {
      mainFig.addEventListener("click", zoomFig, false);
      } else if (mainFig.attachEvent) {
      mainFig.attachEvent("onclick", zoomFig);
      }
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}