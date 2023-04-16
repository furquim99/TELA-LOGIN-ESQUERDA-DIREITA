function funcaoBotao(button){
    const fazerUmaConta = document.getElementById('sing-up-form');
    fazerUmaConta.classList.toggle("displayN");

    const entrarNaConta = document.getElementById('login');
    entrarNaConta.classList.toggle("displayN");

    const acessoConta = document.getElementById('entrar');
    acessoConta.classList.toggle("displayF")

    const entrar = document.getElementById('login-form');
    entrar.classList.toggle("displayF");

    const col1 = document.getElementById("col1");
    const col2 = document.getElementById("col2");
    col1.classList.toggle("order");

    if(button === "login"){
        col1.classList.add("lado-esquerdo");
        col1.classList.remove("lado-direito");

        col2.classList.add("lado-direito");
        col2.classList.remove("lado-esquerdo");
        
    } else{
        col1.classList.add("lado-direito");
        col1.classList.remove("lado-esquerdo");

        col2.classList.add("lado-esquerdo");
        col2.classList.remove("lado-direito");
    }
}

const email1 = document.getElementById("email1");
const emailSpan1 = document.getElementById("span-email1");
const email2 = document.getElementById("email2");
const emailSpan2 = document.getElementById("span-email2");
const senha1 = document.getElementById("senha1");
const senhaSpan1 = document.getElementById("span-senha1");
const senha2 = document.getElementById("senha2");
const senhaSpan2 = document.getElementById("span-senha2");

email1.addEventListener("input", () => {
    if(email1.value){
        emailSpan1.classList.add("focusSpan");
    }else{
        emailSpan1.classList.remove("focusSpan");
    }
})

email2.addEventListener("input", () => {
    if(email2.value){
        emailSpan2.classList.add("focusSpan");
    }else{
        emailSpan2.classList.remove("focusSpan");
    }
})

senha1.addEventListener("input", () => {
    if(senha1.value){
        senhaSpan1.classList.add("focusSpan");
    }else{
        senhaSpan1.classList.remove("focusSpan");
    }
})

senha2.addEventListener("input", () => {
    if(senha2.value){
        senhaSpan2.classList.add("focusSpan");
    }else{
        senhaSpan2.classList.remove("focusSpan");
    }
})