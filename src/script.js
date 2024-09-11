function generateTrip(event) {
  event.preventDefault();

  new Typewriter("#placeholderText", {
    strings:
      "Whatever you passion, hiking, biking or kayaking, we will find you the trip of your dreams... ",
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

let tripFormElement = document.querySelector("#tripGeneratorFormCountry");
tripFormElement.addEventListener("submit", generateTrip);
