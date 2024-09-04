// Função para pesquisar atletas
function pesquisarAtleta() {
    const input = document.querySelector('input[type="text"]').value.toLowerCase();
    const artigos = document.querySelectorAll('article');
    
    artigos.forEach(artigo => {
        const nomeAtleta = artigo.getAttribute('data-nome').toLowerCase();
        if (nomeAtleta.includes(input)) {
            artigo.style.display = ''; // Mostra o artigo se o nome coincidir
        } else {
            artigo.style.display = 'none'; // Oculta o artigo se o nome não coincidir
        }
    });
}

// Função para alternar a exibição de informações adicionais
function toggleInfo(button) {
    const moreInfo = button.previousElementSibling; // Seleciona o elemento "more-info"
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block"; // Mostra as informações adicionais
        button.textContent = "Ver menos"; // Altera o texto do botão
    } else {
        moreInfo.style.display = "none"; // Esconde as informações adicionais
        button.textContent = "Ver mais"; // Altera o texto do botão
    }
}
