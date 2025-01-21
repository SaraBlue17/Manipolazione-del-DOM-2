// Implementare il codice necessario per:

// Recuperare il valore di ciascun campo di input e creare un oggetto person contenente le proprietà: firstName, lastName e age.

const inputs = document.getElementsByClassName("form-input");
const firstName = inputs[0];
const lastName = inputs[1];
const age = inputs[2];

const person = {
  firstName: firstName.value,
  lastName: lastName.value,
  age: age.value,
};

// Infine recuperare l'elemento form aggiungere l'attributo data-person contenente l'oggetto person in formato json.

const form = document.querySelector("form");
form.setAttribute("data-person", JSON.stringify(person));

console.log(person);

// Video soluzione

// const firstName = document.querySelector("#firstName");
// const lastName = document.querySelector("#lastName");
// const age = document.querySelector("#age");

// const person = {
//   firstName: firstName.value,
//   lastName: lastName.value,
//   age: age.value,
// };

// console.log(person);

// const form = document.querySelector("form");
// form.setAttribute("data-person", JSON.stringify(person));
