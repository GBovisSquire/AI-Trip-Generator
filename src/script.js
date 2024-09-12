function displayTrip(response) {
  new Typewriter("#tripText", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

function generateTrip(event) {
  event.preventDefault();

  let countryInstructionsInput = document.querySelector("#countryInput");
  console.log(countryInstructionsInput);
  let apiKey = "9o07e397f0bc4d320b6f39t559a2a30e";

  let context =
    "You are an AI Assistant that explains the best time to visit a country. The answer should be no longer than 50 words. Make sure to follow the user instructions.";
  let prompt = `User instructions: When is the best time of year to go to ${countryInstructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let tripElement = document.querySelector("#tripText");
  //tripElement.classList.remove("hidden");
  tripElement.innerHTML = `Finding the best time to visit ${countryInstructionsInput.value}...`;

  console.log("generating trip");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayTrip);
}

let tripFormElement = document.querySelector("#tripGeneratorFormCountry");
tripFormElement.addEventListener("submit", generateTrip);
