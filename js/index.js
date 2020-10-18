function isUrl() {
    var url = document.form.url.value;
    regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (!regexp.test(url)) {
        alert("URL INVALIDA.\n");
    } else {
        alert("Url Valida")
    }
}

function esfechavalida() {
    var fecha = document.form.fecha.value;

    // La longitud de la fecha debe tener exactamente 10 caracteres
    if (fecha.length !== 10)
        error = true;

    // Primero verifica el patron
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(fecha))
        error = true;

    // Mediante el delimitador "/" separa dia, mes y año
    var fecha = fecha.split("/");
    var day = parseInt(fecha[0]);
    var month = parseInt(fecha[1]);
    var year = parseInt(fecha[2]);

    // Verifica que dia, mes, año, solo sean numeros
    error = (isNaN(day) || isNaN(month) || isNaN(year));

    // Lista de dias en los meses, por defecto no es año bisiesto
    var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 1 || month > 2)
        if (day > ListofDays[month - 1] || day < 0 || ListofDays[month - 1] === undefined)
            error = true;

    // Detecta si es año bisiesto y asigna a febrero 29 dias
    if (month === 2) {
        var lyear = ((!(year % 4) && year % 100) || !(year % 400));
        if (lyear === false && day >= 29)
            error = true;
        if (lyear === true && day > 29)
            error = true;
    }

    if (error === true) {
        alert("Fecha Inválida: * La Fecha debe tener el formato: dd/mm/aaaa (dia/mes/año).\n");
        return false;
    } else
        alert("Fecha Válida\n");

    return true;
}