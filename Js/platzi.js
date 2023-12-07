const URL = "https://api.escuelajs.co/api/v1/products"
let img = document.getElementById('imgProduct');
let titleProduct = document.getElementById('titleProduct');
let priceProduct = document.getElementById('priceProduct');
let mainSection = document.querySelector('.main-container');
let i = 1;
let contadores = {};
let idDelElemento;

callApi()

function opencar() {
    var x = document.querySelector('.main-orders');
    if (x.style.display === "none") x.style.display = "block";
    else x.style.display = "none";
    updatePrice()
}

function closeOrders() {
    document.querySelector('.main-orders').style.display = "none";
};

function callApi() {
    fetch(URL)
        .then(res => {
            if (res.ok) return res.json()
            else throw new Error('Error')
        })
        .then(data => {

            data.forEach(resultados => {

                var createDivElement = document.createElement("div");

                createDivElement.innerHTML = `
                <div class="card" id="${resultados.id}">
                    <div class="card-img">
                        <div class="img">
                            <img src="${resultados.images}" alt="image-product" id="imgProduct">
                        </div>
                    </div>
                    <div class="card-title" id="titleProduct">${resultados.title}</div>
                    <hr class="card-divider">
                    <div class="card-footer">
                        <div class="card-price" id="priceProduct">$ ${resultados.price}</div>
                        <button id="addToCartButton${resultados.id}" class="card-btn" onclick="addtocar(this)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z">
                                </path>
                                <path
                                    d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z">
                                </path>
                                <path
                                    d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z">
                                </path>
                                <path
                                    d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>`;

                mainSection.appendChild(createDivElement);
            });
        })
        .catch(err => {
            Swal.fire({
                icon: "error",
                title: "Ups! Ocurrio un error, por favor vuelve a intentarlo luego: " + err,
            });
        })
}


function addtocar(clickedButton) {
    clickedButton.disabled = true;

    let card = clickedButton.closest('.card');
    let title = card.querySelector('.card-title').innerText;
    price = card.querySelector('.card-price').innerText;
    let imageSrc = card.querySelector('.img img').src;
    idDelElemento = card.getAttribute('id');

    document.querySelector('.main-orders').style.display = "block";
    let createproductElement = document.createElement("div");
    let divprosucto = document.querySelector('.productosagregados');

    createproductElement.innerHTML = `<div class="conteainerallinfo" id="id${idDelElemento}">
            <div class="card-mis-productos">
                <div class="img-mis-productos">
                    <figure>
                        <img src="${imageSrc}"
                            alt="imagen productos" width="100%">
                    </figure>
                </div>
                <div class="textBox">
                    <div class="textContent">
                        <p class="h1">${title}</p>
                        <span class="span" onclick="deleteproduct(${idDelElemento})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                class="bi bi-trash3 deleteproduct" viewBox="0 0 16 16">
                                <path
                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                            </svg>
                        </span>
                    </div>
                    <p class="p" id="precios">${price}</p>

                    <div class="buttonsmore">
                        <div>
                            <button class="buttonmore" onclick="minusmore(${idDelElemento})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                </svg>
                            </button>
                        </div>
                        <div class="price-mis-productos cantidaddeproductos${idDelElemento}" id="cantidaddeproductos">${i}</div>
                        <div>
                            <button class="buttonmore" onclick="addmore(${idDelElemento})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

    divprosucto.appendChild(createproductElement)
    updatePrice()
}

function deleteproduct(idcard) {
    document.querySelector(`.conteainerallinfo#id${idcard}`).remove()
    document.querySelector(`#addToCartButton${idcard}`).disabled = false;

    updatePrice()
}

function addmore(aumentar) {
    if (!contadores[aumentar]) contadores[aumentar] = 2;
    else contadores[aumentar]++;
    document.querySelector(`.cantidaddeproductos${aumentar}`).innerHTML = contadores[aumentar];

    updatePrice()
}

function minusmore(disminuir) {
    contadores[disminuir]--;
    if (contadores[disminuir] <= 1) contadores[disminuir] = 1;
    document.querySelector(`.cantidaddeproductos${disminuir}`).innerHTML = contadores[disminuir];

    updatePrice()
}


function updatePrice() {
    let todos = document.querySelectorAll(".textBox");
    if (todos.length === 0) document.querySelector('.totalprice').innerHTML = "$ 0";

    let total = 0;
    todos.forEach(element => {
        let precio = element.querySelector("#precios")?.textContent;
        let preciosnuevovsinsignopesos = precio.replace(/\s/g, "").replace("$", "");
        let cantidad = element.querySelector("#cantidaddeproductos")?.textContent;

        total += preciosnuevovsinsignopesos * cantidad;
    });
    document.querySelector('.totalprice').innerHTML = "$ " + total;
}
