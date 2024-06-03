function checkForm(el) {
    let name = el.name.value;
    let pass = el.password.value;
    console.log(name + pass);

    let fail = "";

    if (name == "" || pass == "") {
        fail = "Заполните все поля";
    } else if (name.length <= 1 || name.length > 11) {
        fail = "Введите корректный номер";
    } else if (pass.includes("&")) {
        fail = "Некоректный пароль ";
        console.log("huita");
    } else if (pass.length < 8 || pass.length > 33) {
        fail = "Некорректный пароль";
        console.log("huita");
    } else {
        // All conditions passed
    }

    if (fail != "") {
        document.getElementById('error').innerHTML = fail;
        return false;
    } else {
        alert("Данные корректно заполнены");
        window.location='index1.html'
        return false;
    }
}