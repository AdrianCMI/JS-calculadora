//variables
var operando1 = '';
var operacion = '';
var operando2 = '';
var resultado_final = '';


//funcion que enseña la operacion
var pulsar = function(num){;

    if(num == 'resultado'){;

    };
    if(num == 'sumar'){;
        document.getElementById('pantalla1').innerHTML = '';
        operacion = num;
        } else if(operacion == ''){;
            operando1 = operando1 + num;
            document.getElementById('pantalla1').innerHTML = operando1;
        } else {;
            operando2 = operando2 + num;
            document.getElementById('pantalla1').innerHTML = operando2;
    };

};

var igualar = function(resultado, resultado_final){;

    document.getElementById('pantalla1').innerHTML = '';
    var resultado_final = sumar(operando1, operando2);
    console.log(operando1)
    console.log(operando2)
    console.log(resultado_final)
    document.getElementById('pantalla1').innerHTML = resultado_final;
}

var sumar = function(operando1, operando2) {
    return Number(operando1) + Number(operando2);
}
