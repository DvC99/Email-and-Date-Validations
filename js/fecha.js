function esfechavalida() {
    var error = false;
    var fecha = document.form.fecha.value;
    //Se valida que el valor que entra tenga el tamaño que es
    if (fecha.length !== 10)
        error = true;
    //Se valida que la fecha este separada por "/"
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(fecha))
        error = true;
    var fecha = fecha.split("/");
    var dia = fecha[0];
    var mes = fecha[1];
    var año = fecha[2];
    //Se valida que el dia tenga el rango que es
    var undia = /(0[1-9]|[1-2][0-9]|3[0-1])/.test(dia);
    //Se valida que el mes tenga el rango que es
    var unmes = /(0[1-9]|1[0-2])/.test(mes);
    //Se valida que el año tenga el rango que es
    var unaño = /(000[0-9]|00[1-9][0-9]|0[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])/.test(año);
    //Se valida que el dia, el mes y el año
    if (!undia)
        error = true;
    if (!unmes)
        error = true;
    if (!unaño) 
        error = true;
    //Se valida el año bisiesto
    var DiasXMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (mes === 1 || mes > 2)
        if (dia > DiasXMes[mes - 1] || dia < 0 || DiasXMes[mes - 1] === undefined)
            error = true;
    if (mes === 2) {
        var laño = ((!(año % 4) && año % 100) || !(año % 400));
        if (laño === false && dia >= 29)
            error = true;
        if (laño === true && dia > 29)
            error = true;
    }
    console.log(error, undia, unmes, unaño);
    if (error) {
        document.getElementById('fecha').innerHTML = '<div class="alert alert-danger" role="alert">Formato de fecha no valida</div>';
    } else {
        document.getElementById('fecha').innerHTML = '<div class="alert alert-success" role="alert">Formato de fecha Valida</div>';
    }
    return true;
}