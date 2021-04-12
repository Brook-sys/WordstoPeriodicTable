function transform(){
    var textobruto = document.getElementById("btntransform").value;
    var url = "Json-Periodic-Table.json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var elementos = request.response;
    }
    console.log(elementos[0])
}