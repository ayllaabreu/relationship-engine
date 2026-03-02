// ===== CONFIGURE A DATA INICIAL AQUI =====
const dataInicio = new Date("2023-01-01T00:00:00");

// ==========================================

function atualizarContador(){

    const agora = new Date();

    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    const contador = document.getElementById("contador");

    if(contador){
        contador.innerHTML = 
        `${dias} dias ${horas}h ${minutos}m ${segundos}s`;
    }
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);

// Executa imediatamente ao carregar
atualizarContador();
