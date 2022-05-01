
window.addEventListener('load', main)

function main() {
    const dugme = document.getElementById('dugme');
    var joke = document.getElementsByClassName('joke');
    var joke_title = document.getElementById('title');
    dugme.addEventListener('click', () => {
        getJoke();
    })
}

window.onload = () => provera();

function provera() {
    const lokal = localStorage.getItem('proba');
    const ID = localStorage.getItem("ID")
    if (lokal !== null) {
        fetch ('http://api.icndb.com/jokes/random/')
        .then(response => response.json())
    .then(data => {
        var joke = document.getElementsByClassName('joke');
        for (let jok of joke) {
            jok.innerHTML=""
            jok.innerHTML=lokal;
    }
    var kategorija = document.getElementById('category')
    kategorija.innerHTML="ID: " + ID;
})
    }
}

async function getJoke() {
    fetch ('http://api.icndb.com/jokes/random/')
    .then(response => response.json())
    .then(data => {
        var joke = document.getElementsByClassName('joke');
        for (let jok of joke) {
            jok.innerHTML=""
            jok.innerHTML=data.value.joke
            localStorage.setItem('proba', data.value.joke)
        } 
        
        
        var kategorija = document.getElementById('category');
        kategorija.innerHTML="ID: " + data.value.id
        localStorage.setItem('ID', data.value.id)
        console.log(data.value)})
        .catch (err =>{
            var sala = document.getElementById('sala')
            sala.innerHTML="Inernet veza trenutno nije dostupna" }) 
}
