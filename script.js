// Função para pesquisar atletas
function pesquisarAtleta() {
    const input = document.querySelector('#searchInput').value.toLowerCase();
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
    const moreInfo = button.previous
}
