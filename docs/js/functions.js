// MODO NOTURNO
function DarkMode() {
    document.body.classList.toggle("dark-mode");
}

// ACESSIBILIDADE
let fontSizeMultiplier = 1;

function aumentarFonte() {
    fontSizeMultiplier += 0.1;
    document.documentElement.style.setProperty('--font-size-multiplier', fontSizeMultiplier);
}

function diminuirFonte() {
    if (fontSizeMultiplier > 0.8) {
        fontSizeMultiplier -= 0.1;
        document.documentElement.style.setProperty('--font-size-multiplier', fontSizeMultiplier);
    }
}

// VALIDAÇÃO DE FORMULÁRIO
function validarFormularioContact() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let assunto = document.getElementById("assunto").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "") {
        alert("Digite seu nome.");
        return false;
    }

    if (email === "") {
        alert("Digite seu e-mail.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido.");
        return false;
    }

    if (telefone === "") {
        alert("Digite seu telefone.");
        return false;
    }

    if (isNaN(telefone)) {
        alert("O telefone deve conter apenas números.");
        return false;
    }

    if (assunto === "") {
        alert("Digite o assunto.");
        return false;
    }

    if (mensagem === "") {
        alert("Digite sua mensagem.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}

// TOCAR MÚSICA DO GRÊMIO
function tocarAudio(event) {
    event.preventDefault();
    let audio = document.getElementById("musica");
    audio.play();

    setTimeout(() => {
        window.location.href = "https://gremio.net";
    }, 20000);
}

// VOLTAR ATÉ O TOPO DA PÁGINA
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
