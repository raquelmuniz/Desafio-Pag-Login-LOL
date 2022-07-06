const [usuario, password] = document.querySelectorAll("input");

const btn = document.querySelector(".entrar");

function validate(){
    if (usuario.value && password.value.length >= 8){
        btn.removeAttribute("disabled")
    }else{
        btn.setAttribute("disabled", "disabled");
    }
}

usuario.addEventListener("input", validate);
password.addEventListener("input", validate);