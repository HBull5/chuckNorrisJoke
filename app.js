document.getElementById("submitBtn").addEventListener("click", loadJoke);
function loadJoke(e) {
  const xhr = new XMLHttpRequest();
  const numJokes = document.getElementById("jokeCount").value;
  xhr.open("GET", `http://api.icndb.com/jokes/random/${numJokes}`, true);
  xhr.onload = function() {
    let output = "";
    let display = document.getElementsByClassName("jokes")[0];
    if(this.status === 200){
      const joke = JSON.parse(this.responseText);
      if(joke.type === "success") {
        joke.value.forEach((joke) => {
          output += `<p>${joke.joke}</p><br>`;
        });
        display.innerHTML = output;
      } else {
        display.innerHTML = `<p>API would appear to be unresponsive</p>`;
      }
    }
  }
  xhr.send();
}