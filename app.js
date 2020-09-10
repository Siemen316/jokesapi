let btn = document.getElementById('btn');
let para = document.getElementById('para');
btn.addEventListener('click', showJokes);

async function showJokes() {
  let api = await fetch('https://api.chucknorris.io/jokes/random');
  let data = await api.json();
  para.innerHTML = `${data.value}`;
}
