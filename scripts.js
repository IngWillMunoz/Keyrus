function ingresar() {
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    if ((email == "") && (pwd == "")) {
        $('.alert1').show();
    }else{
        $('.alert1--sec').show();
    }
}