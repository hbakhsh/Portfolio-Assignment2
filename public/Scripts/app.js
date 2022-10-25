/*
File Name: app.js
Name: Husna Bakhshi
Id: 301194192
Date: 23 October 2022
*/

// IIFE -- Immediately Invoked Function Expression
(function () {
    function Start() {
      console.log("App Started...");
      let deletebuttons = document.querySelectorAll(".btn-danger");
      for (button of deletebuttons) {
        button.addEventListener("click", (event) => {
          if (!confirm("Are you sure")) {
            event.preventDefault();
            window.location.assign("/book-list");
          }
        });
      }
    }
    window.addEventListener("load", Start);
  })();
  