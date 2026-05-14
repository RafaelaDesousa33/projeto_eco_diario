// elementos DOM

const economizarAguaButtons = document.querySelectorAll(
    '.economizarAgua-content__buttons button'
);

const salvarRegistro = document.getElementById("salvarRegistro");

const feedBackRegistro = document.querySelector('.feedBackRegistro p');

const litrosEconomizados = document.getElementById('litrosEconomizados')

const selecionarQuantidadeDeAguaEconomizada = (botaoSelecionado, value) => {

    // Remove estilo de todos os botões
    economizarAguaButtons.forEach((botao) => {
        botao.classList.remove('bg-primary', 'text-light');
        botao.disabled = false;
    });

    // Adiciona estilo ao botão clicado
    botaoSelecionado.classList.add('bg-primary', 'text-light');

    // Desabilita apenas o botão selecionado
    botaoSelecionado.disabled = true;

    litrosEconomizados.textContent = value
};

economizarAguaButtons.forEach((botao) => {

    botao.addEventListener('click', () => {
        const value = botao.getAttribute("value")

        selecionarQuantidadeDeAguaEconomizada(botao, value);
        feedBackRegistro.textContent = ""
    });

});

salvarRegistro.addEventListener('click', () => {

    economizarAguaButtons.forEach((botao) => {
        botao.classList.remove('bg-primary', 'text-light');

    });


    feedBackRegistro.textContent = 'Seu registro foi salvo!';

});