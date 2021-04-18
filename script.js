function transform(){
    var ListaElementos = document.getElementById("listaelementos");
    ListaElementos.innerHTML = "";
    var textobruto = document.getElementById("inputtext").value; // Pega texto a ser transformado.
    textobruto = textobruto.replace(/\s/g,'');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState == 4 & this.status == 200){
            var elementos = JSON.parse(this.responseText); // Passa os Elementos do arquivo JSON para a variavel Elementos.
            var listelementos = elementos.elements;
            for(var i = 0;;){    //For para buscar cada elemento para cada Letra do texto.
                var txt = textobruto.substring(i,i+3);
                txt = txt[0].toUpperCase() + txt.substr(1).toLowerCase();
                if (proc(listelementos,txt) != false){
                    //Adicionar elemento com 3 letras.
                    console.log(proc(listelementos,txt).name);
                    var Elemento = document.createElement("div");
                    
                    var numAtomic = document.createElement("p");
                    numAtomic.innerHTML = proc(listelementos,txt).number;
                    numAtomic.className = "numero-atomico"
                    Elemento.appendChild(numAtomic);

                    var symb = document.createElement("p");
                    symb.innerHTML = proc(listelementos,txt).symbol;
                    symb.className = "simbolo"
                    Elemento.appendChild(symb);

                    var nam = document.createElement("p");
                    nam.innerHTML = proc(listelementos,txt).name;
                    nam.className = "nome"
                    Elemento.appendChild(nam);

                    Elemento.className = "elemento";
                    ListaElementos.appendChild(Elemento);
                    i = i + 3;
                }
                else{
                    txt = textobruto.substring(i,i+2);
                    txt = txt[0].toUpperCase() + txt.substr(1).toLowerCase();
                    if (proc(listelementos,txt) != false){
                        //Adicionar elemento com 2 letras.
                        console.log(proc(listelementos,txt).name);
                        var Elemento = document.createElement("div");
                    
                        var numAtomic = document.createElement("p");
                        numAtomic.innerHTML = proc(listelementos,txt).number;
                        numAtomic.className = "numero-atomico"
                        Elemento.appendChild(numAtomic);

                        var symb = document.createElement("p");
                        symb.innerHTML = proc(listelementos,txt).symbol;
                        symb.className = "simbolo"
                        Elemento.appendChild(symb);

                        var nam = document.createElement("p");
                        nam.innerHTML = proc(listelementos,txt).name;
                        nam.className = "nome"
                        Elemento.appendChild(nam);

                        Elemento.className = "elemento";
                        ListaElementos.appendChild(Elemento);
                        i = i + 2;
                    }
                    else{
                        txt = textobruto.substring(i,i+1);
                        txt = txt[0].toUpperCase();
                        if (proc(listelementos,txt) != false){
                            //Adicionar elemento com 1 letras.
                            console.log(proc(listelementos,txt).name);
                            var Elemento = document.createElement("div");
                    
                            var numAtomic = document.createElement("p");
                            numAtomic.innerHTML = proc(listelementos,txt).number;
                            numAtomic.className = "numero-atomico"
                            Elemento.appendChild(numAtomic);

                            var symb = document.createElement("p");
                            symb.innerHTML = proc(listelementos,txt).symbol;
                            symb.className = "simbolo"
                            Elemento.appendChild(symb);

                            var nam = document.createElement("p");
                            nam.innerHTML = proc(listelementos,txt).name;
                            nam.className = "nome"
                            Elemento.appendChild(nam);

                            Elemento.className = "elemento";
                            ListaElementos.appendChild(Elemento);
                            i = i + 1;
                        }
                        else{
                            //Para caso não encontre nenhum elemento.
                            break;
                        }
                    }
                }
            }
        }
    }
    request.open("GET", "ptable.json", true);
    request.send();
}
function proc(obj, texto){
    var pego = false;
    for(var txt in obj){
        if(obj[txt].symbol.toUpperCase == texto.toUpperCase){
            return obj[txt];
        }
        if (obj[txt] == obj[obj.length - 1]){
            return false;
        }

    }
}
function verif(e, t){
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) ||(charCode = 32))
            return true;
        else
            return false;
    } catch (err) {
        alert(err.Description);
    }
}