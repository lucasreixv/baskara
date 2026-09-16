function Calcula(op) {
    let n1 = Number(document.getElementById("txtn1").value);
    let n2 = Number(document.getElementById("txtn2").value);
    var resultado;

    if (isNaN(n1)) {
    alert(" Primeiro valor não númerico, digite novamente!")
    document.getElementById("txtn1").value = "";
    document.getElementById("txtn1").focus();
    }

    else if (isNaN(n2)) {
    alert(" segundo valor não númerico, digite novamente!")
    document.getElementById("txtn2").value = "";
    document.getElementById("txtn2").focus();
    }

    else {

    if (op == "+") 
        resultado = n1 + n2;
     else if (op == "-") 
        resultado = n1 - n2;
     else if (op == "*") 
        resultado = n1 * n2;
     else if (n2 == 0) 
        resultado = "divisao por zero";
    else 
        resultado = (n1 / n2).toFixed(2);
    
    document.getElementById("txtresu").value = resultado;
    }
    
    
}

function Limpar() {
    document.getElementById("txtn1").focus();
}
