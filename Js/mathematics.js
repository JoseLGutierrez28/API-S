const URLMAS = "https://shadify.dev/api/math/add";
let dataSuma;
let verificarS = document.getElementById('verificarSuma');

window.onload = function () {
    apiSuma();
    apiResta();
    apiMultipli();
    apiDivision();
}

function apiSuma() {
    document.getElementById('respuestaS').value = "";
    fetch(URLMAS)
        .then(res => {
            if (res.ok) return res.json();
            else throw new Error('Error')
        })
        .then(data => {
            dataSuma = data;
            document.getElementById('expresionMas').innerHTML = dataSuma.expression + "  ="
        })
        .catch(err => {
            Swal.fire({
                icon: "error",
                title: "Ups! Ocurrio un error, por favor vuelve a intentarlo luego: " + err,
            });
        })
}

verificarS.onclick = function () {
    let respuestaS = document.getElementById('respuestaS').value;

    if (dataSuma.answer == respuestaS) {
        Swal.fire({
            icon: "success",
            title: "Bien hecho!..",
        });
        apiSuma();
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Ups! Vuelve a intentarlo...",
        });
    }
}

// --------------------------------------- SECCION DE API RESTA ----------------------------------------

const URLRESTA = "https://shadify.dev/api/math/sub";
let verificarR = document.getElementById('verificarResta')
let dataResta;

function apiResta() {
    document.getElementById('respuestR').value = "";
    fetch(URLRESTA)
        .then(res => {
            if (res.ok) return res.json()
            else throw new Error('Error')
        })
        .then(data => {
            dataResta = data;
            document.getElementById('expresionMenos').innerHTML = dataResta.expression + " =";
        })
        .catch(err => {
            Swal.fire({
                icon: "error",
                title: "Ups! Ocurrio un error, por favor vuelve a intentarlo luego: " + err,
            });
        })
}

verificarR.onclick = function () {
    let res = document.getElementById('respuestR').value;
    if (res == dataResta.answer) {
        Swal.fire({
            icon: "success",
            title: "Bien hecho!..",
        });
        apiResta();
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Ups! Vuelve a intentarlo...",
        });
    }
}

// --------------------------------------- SECCION DE API MULTIPLICACIÓN ----------------------------------------

const URLMULTI = "https://shadify.dev/api/math/mul";
let verificarMulti = document.getElementById('verificarMulti')
let dataMulti;

function apiMultipli() {
    document.getElementById('respuestaM').value = "";
    fetch(URLMULTI)
        .then(res => {
            if (res.ok) return res.json()
            else throw new Error('Error')
        })
        .then(data => {
            dataMulti = data;
            document.getElementById('expresionMulti').innerHTML = dataMulti.expression + " =";

        })
        .catch(err => {
            Swal.fire({
                icon: "error",
                title: "Ups! Ocurrio un error, por favor vuelve a intentarlo luego: " + err,
            });
        })
}

verificarMulti.onclick = function () {
    let res = document.getElementById('respuestaM').value;

    if (dataMulti.answer == res) {
        Swal.fire({
            icon: "success",
            title: "Bien hecho!..",
        });
        apiMultipli();
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Ups! Vuelve a intentarlo...",
        });
    }
}

// --------------------------------------- SECCION DE API DIVISIÓN ----------------------------------------

const URLDIVI = "https://shadify.dev/api/math/div";
let verificarDivi = document.getElementById('verificarDivi')
let dataDivi;

function apiDivision() {
    document.getElementById('respuestaD').value = "";
    fetch(URLDIVI)
        .then(res => {
            if (res.ok) return res.json()
            else throw new Error('Error')
        })
        .then(data => {
            dataDivi = data;
            document.getElementById('expresionDivi').innerHTML = dataDivi.expression + " =";

        })
        .catch(err => {
            Swal.fire({
                icon: "error",
                title: "Ups! Ocurrio un error, por favor vuelve a intentarlo luego: " + err,
            });
        })
}

verificarDivi.onclick = function () {
    let res = document.getElementById('respuestaD').value;

    if (dataDivi.answer == res) {
        Swal.fire({
            icon: "success",
            title: "Bien hecho!..",
        });
        apiDivision();
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Ups! Vuelve a intentarlo...",
        });
    }
}





