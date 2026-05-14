
// elementos DOM
const habitosSustentaveis_subtitle = document.querySelector(".habitosSustentaveis-content__subtitle");
const habitosSustentaveis__dica = document.querySelector(".habitosSustentaveis-content__dica")


const dicas = [
    { title: 'Economize Água no Dia a Dia', dica: 'Feche a torneira enquanto escova os dentes, ensaboa a louça ou lava as mãos. Pequenas atitudes podem economizar muitos litros de água por mês.' },
    { title: 'Tire Aparelhos da Tomada', dica: 'Mesmo desligados, muitos aparelhos continuam consumindo energia. Esse consumo é chamado de “stand-by”.' },
    { title: 'Use Ecobags', dica: 'Troque sacolas plásticas por bolsas reutilizáveis ao fazer compras.' },
    { title: 'Prefira Bicicleta ou Caminhada', dica: 'Além de reduzir a poluição, ajuda na saúde física e mental.' },
    { title: 'Evite Desperdício de Comida', dica: 'Planeje refeições e aproveite alimentos por completo, como cascas e talos em receitas.' }
]


function simulandoDicas() {


    setInterval(() => {

        let dicasAleatorias = Math.floor(Math.random() * dicas.length);

        // classes

        habitosSustentaveis_subtitle.classList.add('fw-bold')


        habitosSustentaveis_subtitle.textContent = dicas[dicasAleatorias].title;

        habitosSustentaveis__dica.textContent = dicas[dicasAleatorias].dica
    }, 3000)

}

simulandoDicas()


