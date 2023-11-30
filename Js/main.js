let select = document.getElementById('selectAPI')

select.onchange = function () {
    if (select.value === 'users') location.href = "./Page/users.html";
    else if (select.value === 'catAndDog') location.href = "./Page/catAndDog.html";
}