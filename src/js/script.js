function calcular(){
    let txtn1 = document.getElementById("a").value;
    let txtn2 = document.getElementById("b").value;
    let txtn3 = document.getElementById("c").value;

    var delta1;
    if((txtn1 === "") || (txtn1 === 0) || (isNaN(txtn1))){
        alert("O valor de A nao pode ser vazio,0 ou caracter");
        document.getElementById("a").value="";
        document.getElementById("a").focus();
        return;

    }
    else if((txtn2 ==="")|| (isNaN(txtn2))){
        alert("O valor de b nao pode ser vazio ou igaul a 0");
        document.getElementById("b").value="";
        document.getElementById("b").focus();
        return;
    }
    else if((txtn3 ==="")|| (isNaN(txtn3))){
        alert("O valor de b nao pode ser vazio ou igaul a 0");
        document.getElementById("c").value="";
        document.getElementById("c").focus();
        return;
    }
    else{
        txtn1 = parseFloat(txtn1);
        txtn1 = parseFloat(txtn2);
        txtn1 = parseFloat(txtn3);

        delta1 = Math.pow(txtn2, 2) -(4*txtn1*txtn3);
        document.getElementById("delta").value = delta1
    }
    if (delta1<0){
    document.getElementById("x1").value ="nao ha raizwes inteira";
    
    document.getElementById("x2").value ="nao ha raizwes inteira";
    
    


    }

}

