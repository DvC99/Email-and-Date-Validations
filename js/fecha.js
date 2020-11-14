function esfechavalida() {
    var error = false;
    var fecha = document.form.fecha.value;
    if (fecha.length !== 10)
        error = true;
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(fecha))
        error = true;
    var fecha = fecha.split("/");
    var dia = parseInt(fecha[0]);
    var mes = parseInt(fecha[1]);
    var año = parseInt(fecha[2]);
    error = (isNaN(dia) || isNaN(mes) || isNaN(año));
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
    if (error === true) {
        document.getElementById('fecha').innerHTML = '<div class="alert alert-danger" role="alert">Formato de fecha no valida</div>';
    } else {
        document.getElementById('fecha').innerHTML = '<div class="alert alert-success" role="alert">Formato de fecha Valida</div>';
    }
    return true;
}
