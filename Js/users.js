const URL = "https://randomuser.me/api/";
btn = document.getElementById('GenerateUser');
let descripcion = document.getElementById('description');
let infoUserApi = document.getElementById('infoUser');
let apiData;

btn.onclick = function () {
    ejecutarApi()
}

window.onload = function () {
    ejecutarApi()
}

function ejecutarApi() {
    fetch(URL)
        .then(res => {
            if (res.ok) return res.json()
            else throw new Error('Error')
        })
        .then(data => {
            apiData = data.results[0];

            descripcion.innerHTML = "Hi, My name is"
            infoUserApi.innerHTML = apiData.name.first + ' ' + apiData.name.last;;
            let photo = document.querySelector('#photo');
            photo.src = data.results[0].picture.large
        })
        .catch(err => console.log('Error: ' + err))
}

function infoMail() {
    descripcion.innerHTML = "My email address is";
    infoUserApi.innerHTML = apiData.email;
}

function infoUser() {
    descripcion.innerHTML = "Hi, My name is";
    infoUserApi.innerHTML = apiData.name.first + ' ' + apiData.name.last;
}

function infoBirthday() {
    descripcion.innerHTML = "My birthday is";
    infoUserApi.innerHTML = apiData.dob.date.slice(0, 10);
}

function infoAddress() {
    descripcion.innerHTML = "My address is";
    infoUserApi.innerHTML = apiData.location.postcode + ' ' + apiData.location.country;
}

function infoPhone() {
    descripcion.innerHTML = "My phone number is";
    infoUserApi.innerHTML = apiData.phone;
}

