//variables
var operando1 = '';
var operacion = '';
var operando2 = '';
var resultado_final = '';
var simbolo = '';


//funcion que enseña la operacion
var pulsar = function(num){;
    if(operacion == '') {;
            operando1 = operando1 + num;
            document.getElementById('pantalla').innerHTML = operando1;
    } else {;
            operando2 = operando2 + num;
            document.getElementById('pantalla').innerHTML = operando2;
    };

};

var btnsumar = function(num) {;
    if(num == 'sumar') {;
        document.getElementById('pantalla').innerHTML = '';
        operacion = num;
        simbolo = 'sumar';
    };
}

var btnrestar = function(num) {;
    if(num == 'restar') {;
        document.getElementById('pantalla').innerHTML = '';
        operacion = num;
        simbolo = 'restar';
    }
};

var btnmultiplicar = function(num) {;
    if(num == 'multiplicar') {
        document.getElementById('pantalla').innerHTML = '';
        operacion = num;
        simbolo = 'multiplicar';
    }
}

var btndividir = function(num) {;
    if(num == 'dividir') {
        document.getElementById('pantalla').innerHTML = '';
        operacion = num;
        simbolo = 'dividir';
    }
}




//igual
var igualar = function(resultado_final){;
    if(simbolo == 'sumar') {
    var resultado_final = sumar(operando1, operando2);
    document.getElementById('pantalla').innerHTML = resultado_final;
    } else if(simbolo == 'restar') {;
        var resultado_final = restar(operando1, operando2);
        document.getElementById('pantalla').innerHTML = resultado_final;
    } else if(simbolo == 'multiplicar') {;
        var resultado_final = multiplicar(operando1, operando2);
        document.getElementById('pantalla').innerHTML = resultado_final;
    } else if(simbolo == 'dividir') {;
        var resultado_final = dividir(operando1, operando2);
        document.getElementById('pantalla').innerHTML = resultado_final;
    }
}

//funciones de los simbolos de operacion
var sumar = function(operando1, operando2) {;
    return Number(operando1) + Number(operando2);
};

var restar = function(operando1, operando2) {;
    return Number(operando1) - Number(operando2);
};

var multiplicar = function(operando1, operando2) {;
    return Number(operando1) * Number(operando2);
};

var dividir = function(operando1, operando2) {;
    return Number(operando1) / Number(operando2);
};

var reset = function() {;
    document.getElementById('pantalla').innerHTML = '';
    operando1 = '';
    operacion = '';
    operando2 = '';
    resultado_final = '';
    simbolo = '';
}
