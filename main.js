const form = document.getElementById("form-verify"); // buscar a ID criada para o formulário HTML
const containerMensagemPositiva = document.querySelector(".success-message"); // buscar um elemento do código HTML de acordo com sua ID/Classe
const containerMensagemNegativa = document.querySelector(".error-message"); // buscar um elemento do código HTML de acordo com sua ID/Classe

function validaCampoB(campoA, campoB) {
return campoB > campoA;
}

form.addEventListener("submit", function (e) {
e.preventDefault();

const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const mensagemPositiva = `Sucesso: O campo B(${campoB.value}) é maior que o campo A(${campoA.value})`;
const mensagemNegativa = `Erro: O campo B(${campoB.value}) deve ser maior que o campo A(${campoA.value})`;

formEValido = validaCampoB(campoA.value, campoB.value);

if (formEValido) {
    containerMensagemNegativa.style.display = "none";
    containerMensagemPositiva.innerHTML = mensagemPositiva;
    containerMensagemPositiva.style.display = "block";

    campoA.value = "";
    campoB.value = "";

    // Ocultar a mensagem positiva após 5 segundos
    setTimeout(function() {
    containerMensagemPositiva.style.display = "none";
    }, 5000);
} else {
    containerMensagemPositiva.style.display = "none";
    containerMensagemNegativa.innerHTML = mensagemNegativa;
    containerMensagemNegativa.style.display = "block";

    campoA.value = "";
    campoB.value = "";

    // Ocultar a mensagem negativa após 5 segundos
    setTimeout(function() {
    containerMensagemNegativa.style.display = "none";
    }, 3000);
}
});
