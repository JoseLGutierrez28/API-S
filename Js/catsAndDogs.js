const URLCAT = "https://api.thecatapi.com/v1/images/search";
const URLDOG = " https://api.thedogapi.com/v1/images/search";
btnCat = document.getElementById('generaCat');
btnDog = document.getElementById('generaDog');

window.onload = function () {
    ejecutarApiCat();
    ejecutarApiDog();
}

btnCat.onclick = function () {
    ejecutarApiCat();
}

btnDog.onclick = function () {
    ejecutarApiDog()
}

function ejecutarApiCat() {
    fetch(URLCAT)
        .then(res => {
            if (res.ok) return res.json();
            else throw new Error('Error');
        })
        .then(data => {
            let img = document.getElementById('cat')
            img.src = data[0].url;
            document.getElementById('idCat').innerHTML = "ID: " + data[0].id;
        })
        .catch(err => console.log('Error: ' + err))
}

function ejecutarApiDog() {
    fetch(URLDOG)
        .then(res => {
            if (res.ok) return res.json()
            else throw new Error('Error')
        })
        .then(data => {
            let dog = document.getElementById('dog');
            dog.src = data[0].url;
            document.getElementById('idDog').innerHTML = "ID: " + data[0].id;
        })
        .catch(err => console.log('Error: ' + err))
}



